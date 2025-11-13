import { publishRequest } from '../request/publish-request';
import { PoshmarkRequestConfig } from '../validators/auth';
import * as t from 'io-ts';

/**
 * List all functions
 *
 * @see https://api.dsco.io/api/v3/function
 *
 * @param config - Request configuration with access token
 * @returns List of functions
 */
export async function listFunctions(
  config: PoshmarkRequestConfig,
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'GET',
    path: '/function',
    accessToken: config.access_token,
    outputCodec: t.unknown,
  });
}
