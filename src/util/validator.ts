import * as t from 'io-ts';
import {PathReporter} from 'io-ts/PathReporter';
import {isRight} from 'fp-ts/Either';
import {ValidationError} from '../errors';

/**
 * Validate data against an io-ts codec
 * @throws {ValidationError} If validation fails
 */
export function validate<T>(
  codec: t.Type<T>,
  data: unknown,
  errorPrefix = 'Validation failed'
): T {
  const result = codec.decode(data);

  if (isRight(result)) {
    return result.right;
  }

  const errors = PathReporter.report(result);
  throw new ValidationError(`${errorPrefix}: ${errors.join(', ')}`, errors);
}

/**
 * Check if data is valid according to a codec
 */
export function isValid<T>(codec: t.Type<T>, data: unknown): data is T {
  const result = codec.decode(data);
  return isRight(result);
}

/**
 * Safely validate without throwing
 */
export function safeValidate<T>(
  codec: t.Type<T>,
  data: unknown
): {success: true; data: T} | {success: false; errors: string[]} {
  const result = codec.decode(data);

  if (isRight(result)) {
    return {success: true, data: result.right};
  }

  return {success: false, errors: PathReporter.report(result)};
}
