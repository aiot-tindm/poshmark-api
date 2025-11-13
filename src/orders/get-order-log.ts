import {publishRequest} from '../request/publish-request';
import {DscoRequestConfig} from '../validators/auth';
import * as t from 'io-ts';

/**
 * Get order log
 *
 * @see https://api.dsco.io/api/v3/order/log
 *
 * @param config - Request configuration with access token
 * @param params - Optional query parameters
 * @returns Order log data
 */
export async function getOrderLog(
  config: DscoRequestConfig,
  params?: Record<string, string | number>
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'GET',
    path: '/order/log',
    accessToken: config.access_token,
    outputCodec: t.unknown,
    queryParams: params,
  });
}
