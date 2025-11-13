import {Response} from 'node-fetch';
import {createFetchRequest} from './create-fetch-request';
import {createEndpointUri} from './create-endpoint-uri';
import {
  ApiError,
  AuthError,
  NotFoundError,
  TooManyRequestsError,
  MalformedApiResponse,
} from '../errors';
import {
  isDscoApiError,
  extractErrorMessage,
} from '../util/poshmark-api-error-validate';

export interface ApiRequestOptions {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  path: string;
  accessToken?: string;
  body?: unknown;
  headers?: Record<string, string>;
  queryParams?: Record<string, string | number | boolean | undefined>;
}

/**
 * Publish an API request to the DSCO API
 */
export async function publishApiRequest<T>(
  baseUri: string,
  options: ApiRequestOptions
): Promise<T> {
  const {method, path, accessToken, body, headers = {}, queryParams} = options;

  // Build URL with query parameters
  let url = createEndpointUri(baseUri, path);
  if (queryParams) {
    const searchParams = new URLSearchParams();
    Object.entries(queryParams).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        searchParams.append(key, String(value));
      }
    });
    const queryString = searchParams.toString();
    if (queryString) {
      url = `${url}?${queryString}`;
    }
  }

  // Build headers
  const requestHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
    ...headers,
  };

  if (accessToken) {
    requestHeaders['Authorization'] = `Bearer ${accessToken}`;
  }

  // Execute request
  const response = await createFetchRequest(url, {
    method,
    headers: requestHeaders,
    body: body ? JSON.stringify(body) : undefined,
  });

  // Handle response
  return handleApiResponse<T>(response);
}

/**
 * Handle API response and errors
 */
async function handleApiResponse<T>(response: Response): Promise<T> {
  const {status, statusText} = response;

  // Handle successful responses
  if (status >= 200 && status < 300) {
    // Check if response has content
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      try {
        const data = await response.json();
        return data as T;
      } catch (error) {
        throw new MalformedApiResponse(
          'Failed to parse JSON response',
          await response.text(),
          error
        );
      }
    }

    // Return empty object for successful requests with no content
    if (status === 204) {
      return {} as T;
    }

    // Try to parse as JSON, otherwise return text
    const text = await response.text();
    if (text) {
      try {
        return JSON.parse(text) as T;
      } catch {
        return text as unknown as T;
      }
    }

    return {} as T;
  }

  // Handle error responses
  let errorData: unknown;
  try {
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      errorData = await response.json();
    } else {
      errorData = await response.text();
    }
  } catch {
    errorData = statusText;
  }

  // Extract error message
  const errorMessage = isDscoApiError(errorData)
    ? extractErrorMessage(errorData)
    : typeof errorData === 'string'
      ? errorData
      : statusText || 'Unknown error';

  // Handle specific status codes
  switch (status) {
    case 401:
    case 403:
      throw new AuthError(`Authentication failed: ${errorMessage}`);

    case 404:
      throw new NotFoundError(`Resource not found: ${errorMessage}`);

    case 429: {
      const retryAfter = response.headers.get('retry-after');
      const retryAfterSeconds = retryAfter
        ? parseInt(retryAfter, 10)
        : undefined;
      throw new TooManyRequestsError(
        `Rate limit exceeded: ${errorMessage}`,
        retryAfterSeconds
      );
    }

    default:
      throw new ApiError(
        `API request failed: ${errorMessage}`,
        status,
        errorData
      );
  }
}
