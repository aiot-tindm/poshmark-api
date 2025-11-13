import {publishRequest} from '../request/publish-request';
import {DscoRequestConfig} from '../validators/auth';
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
  config: DscoRequestConfig,
  request: unknown
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'POST',
    path: '/addException',
    accessToken: config.access_token,
    outputCodec: t.unknown,
    input: request,
  });
}
