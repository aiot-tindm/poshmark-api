import {AbstractError} from './abstract-error';

/**
 * Represents an error when data is inconsistent or unexpected
 */
export class InconsistentDataError extends AbstractError {
  public readonly name = 'InconsistentDataError';
  public readonly data?: unknown;

  constructor(message: string, data?: unknown) {
    super(message);
    this.data = data;
  }

  toJSON(): Record<string, unknown> {
    return {
      ...super.toJSON(),
      data: this.data,
    };
  }
}
