import {AbstractError} from './abstract-error';

/**
 * Represents an error response from the DSCO API
 */
export class ApiError extends AbstractError {
  public readonly name = 'ApiError';
  public readonly statusCode: number;
  public readonly response?: unknown;

  constructor(message: string, statusCode: number, response?: unknown) {
    super(message);
    this.statusCode = statusCode;
    this.response = response;
  }

  toJSON(): Record<string, unknown> {
    return {
      ...super.toJSON(),
      statusCode: this.statusCode,
      response: this.response,
    };
  }
}
