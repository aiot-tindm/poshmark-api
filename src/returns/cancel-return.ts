import {publishRequest} from '../request/publish-request';
import {DscoRequestConfig} from '../validators/auth';
import * as t from 'io-ts';

/**
 * Cancel return
 *
 * @see https://api.dsco.io/api/v3/return/cancel
 *
 * @param config - Request configuration with access token
 * @param request - Cancel return request
 * @returns Cancel return response
 */
export async function cancelReturn(
  config: DscoRequestConfig,
  request: unknown
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'POST',
    path: '/return/cancel',
    accessToken: config.access_token,
    outputCodec: t.unknown,
    input: request,
  });
}
