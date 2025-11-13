import { AbstractError } from './abstract-error';
/**
 * Represents an error response from the DSCO API
 */
export declare class ApiError extends AbstractError {
    readonly name = "ApiError";
    readonly statusCode: number;
    readonly response?: unknown;
    constructor(message: string, statusCode: number, response?: unknown);
    toJSON(): Record<string, unknown>;
}
