import { publishRequest } from '../request/publish-request';
import { DscoRequestConfig } from '../validators/auth';
import * as t from 'io-ts';

/**
 * Get payment allocations for a specific payment
 *
 * @see https://api.dsco.io/api/v3/marketplace/payments/{paymentId}/allocations
 *
 * @param config - Request configuration with access token
 * @param paymentId - The payment ID
 * @param params - Optional query parameters
 * @returns Payment allocations data
 */
export async function getPaymentAllocations(
  config: DscoRequestConfig,
  paymentId: string,
  params?: Record<string, string | number>,
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'GET',
    path: `/marketplace/payments/${paymentId}/allocations`,
    accessToken: config.access_token,
    outputCodec: t.unknown,
    queryParams: params,
  });
}
