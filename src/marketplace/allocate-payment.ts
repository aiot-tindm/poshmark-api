import { publishRequest } from '../request/publish-request';
import { PoshmarkRequestConfig } from '../validators/auth';
import * as t from 'io-ts';

/**
 * Allocate a marketplace payment
 *
 * @see https://api.dsco.io/api/v3/marketplace/payments/{paymentId}/allocations
 *
 * @param config - Request configuration with access token
 * @param paymentId - The payment ID
 * @param allocation - The allocation details
 * @returns The allocation result
 */
export async function allocatePayment(
  config: PoshmarkRequestConfig,
  paymentId: string,
  allocation: unknown,
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'POST',
    path: `/marketplace/payments/${paymentId}/allocations`,
    accessToken: config.access_token,
    inputCodec: t.unknown,
    outputCodec: t.unknown,
    input: allocation,
  });
}
