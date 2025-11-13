/**
 * Abstract base error class for all poshmark-api errors
 */
export declare abstract class AbstractError extends Error {
    abstract readonly name: string;
    readonly timestamp: Date;
    constructor(message: string);
    /**
     * Returns a JSON representation of the error
     */
    toJSON(): Record<string, unknown>;
}
