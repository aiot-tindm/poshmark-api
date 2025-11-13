import { publishRequest } from '../request/publish-request';
import { DscoRequestConfig } from '../validators/auth';
import { GetOrderResponse, GetOrderResponseC } from '../validators/orders/order';

/**
 * Get order by order key
 *
 * @see https://api.dsco.io/api/v3/order/
 *
 * @param config - Request configuration with access token
 * @param orderKey - The order key to retrieve
 * @returns Order information
 */
export async function getOrder(
  config: DscoRequestConfig,
  orderKey: string,
): Promise<GetOrderResponse> {
  return publishRequest<never, GetOrderResponse>(config.baseUri, {
    method: 'GET',
    path: '/order/',
    accessToken: config.access_token,
    outputCodec: GetOrderResponseC,
    queryParams: { orderKey },
  });
}
