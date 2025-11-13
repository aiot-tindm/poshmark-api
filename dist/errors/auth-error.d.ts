import { AbstractError } from './abstract-error';
/**
 * Represents an authentication/authorization error
 */
export declare class AuthError extends AbstractError {
    readonly name = "AuthError";
    constructor(message: string);
}
