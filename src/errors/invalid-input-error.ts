import { AbstractError } from './abstract-error';

/**
 * Represents an error when input validation fails
 */
export class InvalidInputError extends AbstractError {
  public readonly name = 'InvalidInputError';
  public readonly input?: unknown;

  constructor(message: string, input?: unknown) {
    super(message);
    this.input = input;
  }

  toJSON(): Record<string, unknown> {
    return {
      ...super.toJSON(),
      input: this.input,
    };
  }
}
