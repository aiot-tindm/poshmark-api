import { AbstractError } from './abstract-error';

/**
 * Represents a 404 Not Found error
 */
export class NotFoundError extends AbstractError {
  public readonly name = 'NotFoundError';
  public readonly resource?: string;

  constructor(message: string, resource?: string) {
    super(message);
    this.resource = resource;
  }

  toJSON(): Record<string, unknown> {
    return {
      ...super.toJSON(),
      resource: this.resource,
    };
  }
}
