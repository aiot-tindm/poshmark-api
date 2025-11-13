import { AbstractError } from './abstract-error';
/**
 * Represents an error when API response is malformed or doesn't match expected schema
 */
export declare class MalformedApiResponse extends AbstractError {
    readonly name = "MalformedApiResponse";
    readonly response?: unknown;
    readonly validationErrors?: unknown;
    constructor(message: string, response?: unknown, validationErrors?: unknown);
    toJSON(): Record<string, unknown>;
}
