import { publishRequest } from '../request/publish-request';
import { PoshmarkRequestConfig } from '../validators/auth';
import * as t from 'io-ts';

/**
 * Update return
 *
 * @see https://api.dsco.io/api/v3/return/update
 *
 * @param config - Request configuration with access token
 * @param request - Update return request
 * @returns Update return response
 */
export async function updateReturn(
  config: PoshmarkRequestConfig,
  request: unknown,
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'POST',
    path: '/return/update',
    accessToken: config.access_token,
    outputCodec: t.unknown,
    input: request,
  });
}
