import {publishRequest} from '../request/publish-request';
import {DscoRequestConfig} from '../validators/auth';
import * as t from 'io-ts';

/**
 * SCA backstop inventory
 *
 * @see https://api.dsco.io/api/v3/inventory/sca/backstop
 *
 * @param config - Request configuration with access token
 * @param request - SCA backstop request
 * @returns SCA backstop response
 */
export async function scaBackstop(
  config: DscoRequestConfig,
  request: unknown
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'POST',
    path: '/inventory/sca/backstop',
    accessToken: config.access_token,
    outputCodec: t.unknown,
    input: request,
  });
}
