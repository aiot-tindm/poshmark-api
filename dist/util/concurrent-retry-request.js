"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.concurrentRetryRequest = concurrentRetryRequest;
exports.concurrentRetryRequests = concurrentRetryRequests;
const time_1 = require("./time");
const errors_1 = require("../errors");
const DEFAULT_RETRY_OPTIONS = {
    maxRetries: 3,
    initialDelayMs: 1000,
    maxDelayMs: 10000,
    backoffMultiplier: 2,
    retryableStatusCodes: [408, 429, 500, 502, 503, 504],
};
/**
 * Execute a request with automatic retry logic using exponential backoff
 */
async function concurrentRetryRequest(requestFn, options = {}) {
    const opts = { ...DEFAULT_RETRY_OPTIONS, ...options };
    let lastError;
    let delay = opts.initialDelayMs;
    for (let attempt = 0; attempt <= opts.maxRetries; attempt++) {
        try {
            return await requestFn();
        }
        catch (error) {
            lastError = error;
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
            if (error instanceof errors_1.TooManyRequestsError && error.retryAfter) {
                delay = error.retryAfter * 1000;
            }
            // Wait before retrying
            await (0, time_1.sleep)(Math.min(delay, opts.maxDelayMs));
            // Increase delay for next attempt
            delay *= opts.backoffMultiplier;
        }
    }
    throw lastError || new errors_1.TransportError('Request failed after all retries');
}
/**
 * Check if an error is retryable
 */
function isRetryableError(error, retryableStatusCodes) {
    if (error instanceof errors_1.TooManyRequestsError) {
        return true;
    }
    if (error instanceof errors_1.TransportError) {
        return true;
    }
    // Check for status code based errors
    if (typeof error === 'object' &&
        error !== null &&
        'statusCode' in error &&
        typeof error.statusCode === 'number') {
        return retryableStatusCodes.includes(error.statusCode);
    }
    return false;
}
/**
 * Execute multiple requests concurrently with retry logic
 */
async function concurrentRetryRequests(requestFns, options = {}) {
    const promises = requestFns.map((fn) => concurrentRetryRequest(fn, options));
    return Promise.all(promises);
}
