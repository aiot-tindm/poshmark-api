import {AbstractError} from './abstract-error';

/**
 * Represents a validation error from io-ts
 */
export class ValidationError extends AbstractError {
  public readonly name = 'ValidationError';
  public readonly errors: unknown;

  constructor(message: string, errors: unknown) {
    super(message);
    this.errors = errors;
  }

  toJSON(): Record<string, unknown> {
    return {
      ...super.toJSON(),
      errors: this.errors,
    };
  }
}
