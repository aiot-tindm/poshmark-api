import { publishRequest } from '../request/publish-request';
import { PoshmarkRequestConfig } from '../validators/auth';
import * as t from 'io-ts';

/**
 * Batch pricing approval (large)
 *
 * @see https://api.dsco.io/api/v3/pricing/approval/batch/large
 *
 * @param config - Request configuration with access token
 * @param request - Batch pricing approval request
 * @returns Batch pricing approval response
 */
export async function batchPricingApproval(
  config: PoshmarkRequestConfig,
  request: unknown,
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'POST',
    path: '/pricing/approval/batch/large',
    accessToken: config.access_token,
    outputCodec: t.unknown,
    input: request,
  });
}
