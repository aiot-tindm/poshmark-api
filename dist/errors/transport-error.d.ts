import { AbstractError } from './abstract-error';
/**
 * Represents a network/transport error
 */
export declare class TransportError extends AbstractError {
    readonly name = "TransportError";
    readonly cause?: Error;
    constructor(message: string, cause?: Error);
    toJSON(): Record<string, unknown>;
}
