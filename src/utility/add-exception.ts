import { publishRequest } from '../request/publish-request';
import { PoshmarkRequestConfig } from '../validators/auth';
import * as t from 'io-ts';

/**
 * Add exception
 *
 * @see https://api.dsco.io/api/v3/addException
 *
 * @param config - Request configuration with access token
 * @param request - Add exception request
 * @returns Add exception response
 */
export async function addException(
  config: PoshmarkRequestConfig,
  request: unknown,
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'POST',
    path: '/addException',
    accessToken: config.access_token,
    outputCodec: t.unknown,
    input: request,
  });
}
