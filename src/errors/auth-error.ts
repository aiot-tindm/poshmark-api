import {AbstractError} from './abstract-error';

/**
 * Represents an authentication/authorization error
 */
export class AuthError extends AbstractError {
  public readonly name = 'AuthError';

  constructor(message: string) {
    super(message);
  }
}
