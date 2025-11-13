import { AbstractError } from './abstract-error';
/**
 * Represents an error when data is inconsistent or unexpected
 */
export declare class InconsistentDataError extends AbstractError {
    readonly name = "InconsistentDataError";
    readonly data?: unknown;
    constructor(message: string, data?: unknown);
    toJSON(): Record<string, unknown>;
}
