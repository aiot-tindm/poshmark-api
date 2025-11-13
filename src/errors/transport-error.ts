import { AbstractError } from './abstract-error';

/**
 * Represents a network/transport error
 */
export class TransportError extends AbstractError {
  public readonly name = 'TransportError';
  public readonly cause?: Error;

  constructor(message: string, cause?: Error) {
    super(message);
    this.cause = cause;
  }

  toJSON(): Record<string, unknown> {
    return {
      ...super.toJSON(),
      cause: this.cause?.message,
    };
  }
}
