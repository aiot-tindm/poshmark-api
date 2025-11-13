import { publishRequest } from '../request/publish-request';
import { PoshmarkRequestConfig } from '../validators/auth';
import * as t from 'io-ts';

/**
 * Create a marketplace payment
 *
 * @see https://api.dsco.io/api/v3/marketplace/payments
 *
 * @param config - Request configuration with access token
 * @param payment - The payment object to create
 * @returns The created payment
 */
export async function createPayment(
  config: PoshmarkRequestConfig,
  payment: unknown,
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'POST',
    path: '/marketplace/payments',
    accessToken: config.access_token,
    inputCodec: t.unknown,
    outputCodec: t.unknown,
    input: payment,
  });
}
