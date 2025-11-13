import { AbstractError } from './abstract-error';

/**
 * Represents an error when API response is malformed or doesn't match expected schema
 */
export class MalformedApiResponse extends AbstractError {
  public readonly name = 'MalformedApiResponse';
  public readonly response?: unknown;
  public readonly validationErrors?: unknown;

  constructor(message: string, response?: unknown, validationErrors?: unknown) {
    super(message);
    this.response = response;
    this.validationErrors = validationErrors;
  }

  toJSON(): Record<string, unknown> {
    return {
      ...super.toJSON(),
      response: this.response,
      validationErrors: this.validationErrors,
    };
  }
}
