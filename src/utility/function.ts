import { publishRequest } from '../request/publish-request';
import { PoshmarkRequestConfig } from '../validators/auth';
import * as t from 'io-ts';

/**
 * Function operations
 *
 * @see https://api.dsco.io/api/v3/function
 *
 * @param config - Request configuration with access token
 * @param request - Function request
 * @returns Function response
 */
export async function executeFunction(
  config: PoshmarkRequestConfig,
  request: unknown,
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'POST',
    path: '/function',
    accessToken: config.access_token,
    outputCodec: t.unknown,
    input: request,
  });
}
