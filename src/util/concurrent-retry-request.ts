import {sleep} from './time';
import {TransportError, TooManyRequestsError} from '../errors';

export interface RetryOptions {
  maxRetries?: number;
  initialDelayMs?: number;
  maxDelayMs?: number;
  backoffMultiplier?: number;
  retryableStatusCodes?: number[];
}

const DEFAULT_RETRY_OPTIONS: Required<RetryOptions> = {
  maxRetries: 3,
  initialDelayMs: 1000,
  maxDelayMs: 10000,
  backoffMultiplier: 2,
  retryableStatusCodes: [408, 429, 500, 502, 503, 504],
};

/**
 * Execute a request with automatic retry logic using exponential backoff
 */
export async function concurrentRetryRequest<T>(
  requestFn: () => Promise<T>,
  options: RetryOptions = {}
): Promise<T> {
  const opts = {...DEFAULT_RETRY_OPTIONS, ...options};
  let lastError: Error | undefined;
  let delay = opts.initialDelayMs;

  for (let attempt = 0; attempt <= opts.maxRetries; attempt++) {
    try {
      return await requestFn();
    } catch (error) {
      lastError = error as Error;

      // Don't retry on the last attempt
      if (attempt === opts.maxRetries) {
        break;
      }

      // Check if error is retryable
      const shouldRetry = isRetryableError(error, opts.retryableStatusCodes);
      if (!shouldRetry) {
        throw error;
      }

      // Handle rate limiting with Retry-After header
      if (error instanceof TooManyRequestsError && error.retryAfter) {
        delay = error.retryAfter * 1000;
      }

      // Wait before retrying
      await sleep(Math.min(delay, opts.maxDelayMs));

      // Increase delay for next attempt
      delay *= opts.backoffMultiplier;
    }
  }

  throw lastError || new TransportError('Request failed after all retries');
}

/**
 * Check if an error is retryable
 */
function isRetryableError(
  error: unknown,
  retryableStatusCodes: number[]
): boolean {
  if (error instanceof TooManyRequestsError) {
    return true;
  }

  if (error instanceof TransportError) {
    return true;
  }

  // Check for status code based errors
  if (
    typeof error === 'object' &&
    error !== null &&
    'statusCode' in error &&
    typeof error.statusCode === 'number'
  ) {
    return retryableStatusCodes.includes(error.statusCode);
  }

  return false;
}

/**
 * Execute multiple requests concurrently with retry logic
 */
export async function concurrentRetryRequests<T>(
  requestFns: Array<() => Promise<T>>,
  options: RetryOptions = {}
): Promise<T[]> {
  const promises = requestFns.map((fn) => concurrentRetryRequest(fn, options));
  return Promise.all(promises);
}
