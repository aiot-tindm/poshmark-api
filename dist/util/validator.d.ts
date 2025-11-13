import * as t from 'io-ts';
/**
 * Validate data against an io-ts codec
 * @throws {ValidationError} If validation fails
 */
export declare function validate<T>(codec: t.Type<T>, data: unknown, errorPrefix?: string): T;
/**
 * Check if data is valid according to a codec
 */
export declare function isValid<T>(codec: t.Type<T>, data: unknown): data is T;
/**
 * Safely validate without throwing
 */
export declare function safeValidate<T>(codec: t.Type<T>, data: unknown): {
    success: true;
    data: T;
} | {
    success: false;
    errors: string[];
};
