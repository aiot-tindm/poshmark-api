import * as t from 'io-ts';

/**
 * DSCO API error response codec
 */
export const DscoApiErrorC = t.partial({
  error: t.string,
  error_description: t.string,
  message: t.string,
  status: t.union([t.number, t.string]),
  statusCode: t.number,
  code: t.string,
  details: t.unknown,
});

export type DscoApiError = t.TypeOf<typeof DscoApiErrorC>;

/**
 * Check if response is an error response
 */
export function isDscoApiError(data: unknown): data is DscoApiError {
  if (typeof data !== 'object' || data === null) {
    return false;
  }

  const obj = data as Record<string, unknown>;
  return (
    'error' in obj ||
    'error_description' in obj ||
    ('message' in obj && 'statusCode' in obj) ||
    ('message' in obj && 'status' in obj)
  );
}

/**
 * Extract error message from DSCO API error response
 */
export function extractErrorMessage(error: unknown): string {
  if (typeof error === 'string') {
    return error;
  }

  if (typeof error === 'object' && error !== null) {
    const obj = error as Record<string, unknown>;

    if (typeof obj.error_description === 'string') {
      return obj.error_description;
    }

    if (typeof obj.error === 'string') {
      return obj.error;
    }

    if (typeof obj.message === 'string') {
      return obj.message;
    }

    if (typeof obj.details === 'string') {
      return obj.details;
    }
  }

  return 'Unknown error';
}
