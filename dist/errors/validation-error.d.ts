import { AbstractError } from './abstract-error';
/**
 * Represents a validation error from io-ts
 */
export declare class ValidationError extends AbstractError {
    readonly name = "ValidationError";
    readonly errors: unknown;
    constructor(message: string, errors: unknown);
    toJSON(): Record<string, unknown>;
}
