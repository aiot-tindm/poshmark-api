import { publishRequest } from '../request/publish-request';
import { PoshmarkRequestConfig } from '../validators/auth';
import * as t from 'io-ts';

/**
 * Upload promotion items
 *
 * @see https://api.dsco.io/api/v3/marketplace/promotion/uploaditems
 *
 * @param config - Request configuration with access token
 * @param request - Upload promotion items request
 * @returns Upload promotion items response
 */
export async function uploadPromotionItems(
  config: PoshmarkRequestConfig,
  request: unknown,
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'POST',
    path: '/marketplace/promotion/uploaditems',
    accessToken: config.access_token,
    outputCodec: t.unknown,
    input: request,
  });
}
