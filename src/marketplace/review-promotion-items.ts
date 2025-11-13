import {publishRequest} from '../request/publish-request';
import {DscoRequestConfig} from '../validators/auth';
import * as t from 'io-ts';

/**
 * Review promotion items
 *
 * @see https://api.dsco.io/api/v3/marketplace/promotion/{promotionId}/reviewitems
 *
 * @param config - Request configuration with access token
 * @param promotionId - The promotion ID
 * @param params - Optional query parameters
 * @returns Review promotion items data
 */
export async function reviewPromotionItems(
  config: DscoRequestConfig,
  promotionId: string,
  params?: Record<string, string | number>
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'GET',
    path: `/marketplace/promotion/${promotionId}/reviewitems`,
    accessToken: config.access_token,
    outputCodec: t.unknown,
    queryParams: params,
  });
}
