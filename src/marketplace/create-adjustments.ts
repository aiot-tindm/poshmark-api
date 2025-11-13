import { publishRequest } from '../request/publish-request';
import { PoshmarkRequestConfig } from '../validators/auth';
import * as t from 'io-ts';

/**
 * Create marketplace adjustments
 *
 * @see https://api.dsco.io/api/v3/marketplace/adjustments
 *
 * @param config - Request configuration with access token
 * @param adjustments - The adjustments to create
 * @returns The created adjustments
 */
export async function createAdjustments(
  config: PoshmarkRequestConfig,
  adjustments: unknown,
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'POST',
    path: '/marketplace/adjustments',
    accessToken: config.access_token,
    inputCodec: t.unknown,
    outputCodec: t.unknown,
    input: adjustments,
  });
}
