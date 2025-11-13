import { AbstractError } from './abstract-error';
/**
 * Represents a 429 Too Many Requests error (rate limiting)
 */
export declare class TooManyRequestsError extends AbstractError {
    readonly name = "TooManyRequestsError";
    readonly retryAfter?: number;
    constructor(message: string, retryAfter?: number);
    toJSON(): Record<string, unknown>;
}
