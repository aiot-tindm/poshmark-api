import { publishRequest } from '../request/publish-request';
import { PoshmarkRequestConfig } from '../validators/auth';
import * as t from 'io-ts';

/**
 * Create a single order
 *
 * @see https://api.dsco.io/api/v3/order/
 *
 * @param config - Request configuration with access token
 * @param order - The order object to create
 * @returns The created order
 */
export async function createOrder(
  config: PoshmarkRequestConfig,
  order: unknown,
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'POST',
    path: '/order/',
    accessToken: config.access_token,
    inputCodec: t.unknown,
    outputCodec: t.unknown,
    input: order,
  });
}
