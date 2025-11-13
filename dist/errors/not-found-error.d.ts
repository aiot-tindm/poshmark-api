import { AbstractError } from './abstract-error';
/**
 * Represents a 404 Not Found error
 */
export declare class NotFoundError extends AbstractError {
    readonly name = "NotFoundError";
    readonly resource?: string;
    constructor(message: string, resource?: string);
    toJSON(): Record<string, unknown>;
}
