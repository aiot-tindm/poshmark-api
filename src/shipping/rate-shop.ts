import {publishRequest} from '../request/publish-request';
import {DscoRequestConfig} from '../validators/auth';
import * as t from 'io-ts';

/**
 * Rate shop for shipping
 *
 * @see https://api.dsco.io/api/v3/rateshop
 *
 * @param config - Request configuration with access token
 * @param request - Rate shop request
 * @returns Rate shop response
 */
export async function rateShop(
  config: DscoRequestConfig,
  request: unknown
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'POST',
    path: '/rateshop',
    accessToken: config.access_token,
    outputCodec: t.unknown,
    input: request,
  });
}
