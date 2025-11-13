import { publishRequest } from '../request/publish-request';
import { DscoRequestConfig } from '../validators/auth';
import * as t from 'io-ts';

/**
 * Review promotion
 *
 * @see https://api.dsco.io/api/v3/marketplace/promotion/{promotionId}/reviewpromotion
 *
 * @param config - Request configuration with access token
 * @param promotionId - The promotion ID
 * @param request - Review promotion request
 * @returns Review promotion response
 */
export async function reviewPromotion(
  config: DscoRequestConfig,
  promotionId: string,
  request: unknown,
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'POST',
    path: `/marketplace/promotion/${promotionId}/reviewpromotion`,
    accessToken: config.access_token,
    outputCodec: t.unknown,
    input: request,
  });
}
