import {AbstractError} from './abstract-error';

/**
 * Represents a 429 Too Many Requests error (rate limiting)
 */
export class TooManyRequestsError extends AbstractError {
  public readonly name = 'TooManyRequestsError';
  public readonly retryAfter?: number;

  constructor(message: string, retryAfter?: number) {
    super(message);
    this.retryAfter = retryAfter;
  }

  toJSON(): Record<string, unknown> {
    return {
      ...super.toJSON(),
      retryAfter: this.retryAfter,
    };
  }
}
