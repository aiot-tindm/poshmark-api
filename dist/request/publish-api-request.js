"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publishApiRequest = publishApiRequest;
const create_fetch_request_1 = require("./create-fetch-request");
const create_endpoint_uri_1 = require("./create-endpoint-uri");
const errors_1 = require("../errors");
const poshmark_api_error_validate_1 = require("../util/poshmark-api-error-validate");
/**
 * Publish an API request to the DSCO API
 */
async function publishApiRequest(baseUri, options) {
    const { method, path, accessToken, body, headers = {}, queryParams } = options;
    // Build URL with query parameters
    let url = (0, create_endpoint_uri_1.createEndpointUri)(baseUri, path);
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
    const requestHeaders = {
        'Content-Type': 'application/json',
        ...headers,
    };
    if (accessToken) {
        requestHeaders['Authorization'] = `Bearer ${accessToken}`;
    }
    // Execute request
    const response = await (0, create_fetch_request_1.createFetchRequest)(url, {
        method,
        headers: requestHeaders,
        body: body ? JSON.stringify(body) : undefined,
    });
    // Handle response
    return handleApiResponse(response);
}
/**
 * Handle API response and errors
 */
async function handleApiResponse(response) {
    const { status, statusText } = response;
    // Handle successful responses
    if (status >= 200 && status < 300) {
        // Check if response has content
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
            try {
                const data = await response.json();
                return data;
            }
            catch (error) {
                throw new errors_1.MalformedApiResponse('Failed to parse JSON response', await response.text(), error);
            }
        }
        // Return empty object for successful requests with no content
        if (status === 204) {
            return {};
        }
        // Try to parse as JSON, otherwise return text
        const text = await response.text();
        if (text) {
            try {
                return JSON.parse(text);
            }
            catch {
                return text;
            }
        }
        return {};
    }
    // Handle error responses
    let errorData;
    try {
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
            errorData = await response.json();
        }
        else {
            errorData = await response.text();
        }
    }
    catch {
        errorData = statusText;
    }
    // Extract error message
    const errorMessage = (0, poshmark_api_error_validate_1.isDscoApiError)(errorData)
        ? (0, poshmark_api_error_validate_1.extractErrorMessage)(errorData)
        : typeof errorData === 'string'
            ? errorData
            : statusText || 'Unknown error';
    // Handle specific status codes
    switch (status) {
        case 401:
        case 403:
            throw new errors_1.AuthError(`Authentication failed: ${errorMessage}`);
        case 404:
            throw new errors_1.NotFoundError(`Resource not found: ${errorMessage}`);
        case 429: {
            const retryAfter = response.headers.get('retry-after');
            const retryAfterSeconds = retryAfter ? parseInt(retryAfter, 10) : undefined;
            throw new errors_1.TooManyRequestsError(`Rate limit exceeded: ${errorMessage}`, retryAfterSeconds);
        }
        default:
            throw new errors_1.ApiError(`API request failed: ${errorMessage}`, status, errorData);
    }
}
