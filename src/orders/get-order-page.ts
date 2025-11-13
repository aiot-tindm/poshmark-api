import { publishRequest } from '../request/publish-request';
import { PoshmarkRequestConfig } from '../validators/auth';
import * as t from 'io-ts';

/**
 * Get orders page with pagination
 *
 * @see https://api.dsco.io/api/v3/order/page
 *
 * @param config - Request configuration with access token
 * @param params - Query parameters for pagination
 * @returns Page of orders
 */
export async function getOrderPage(
  config: PoshmarkRequestConfig,
  params?: Record<string, string | number>,
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'GET',
    path: '/order/page',
    accessToken: config.access_token,
    outputCodec: t.unknown,
    queryParams: params,
  });
}
