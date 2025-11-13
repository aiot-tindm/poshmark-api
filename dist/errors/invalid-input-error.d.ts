import { AbstractError } from './abstract-error';
/**
 * Represents an error when input validation fails
 */
export declare class InvalidInputError extends AbstractError {
    readonly name = "InvalidInputError";
    readonly input?: unknown;
    constructor(message: string, input?: unknown);
    toJSON(): Record<string, unknown>;
}
