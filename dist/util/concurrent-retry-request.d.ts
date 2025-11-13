export interface RetryOptions {
    maxRetries?: number;
    initialDelayMs?: number;
    maxDelayMs?: number;
    backoffMultiplier?: number;
    retryableStatusCodes?: number[];
}
/**
 * Execute a request with automatic retry logic using exponential backoff
 */
export declare function concurrentRetryRequest<T>(requestFn: () => Promise<T>, options?: RetryOptions): Promise<T>;
/**
 * Execute multiple requests concurrently with retry logic
 */
export declare function concurrentRetryRequests<T>(requestFns: Array<() => Promise<T>>, options?: RetryOptions): Promise<T[]>;
