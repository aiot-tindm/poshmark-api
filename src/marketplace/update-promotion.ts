import { publishRequest } from '../request/publish-request';
import { PoshmarkRequestConfig } from '../validators/auth';
import * as t from 'io-ts';

/**
 * Update a marketplace promotion
 *
 * @see https://api.dsco.io/api/v3/marketplace/promotion/{promotionId}
 *
 * @param config - Request configuration with access token
 * @param promotionId - The promotion ID
 * @param promotion - The promotion updates
 * @returns The updated promotion
 */
export async function updatePromotion(
  config: PoshmarkRequestConfig,
  promotionId: string,
  promotion: unknown,
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'PUT',
    path: `/marketplace/promotion/${promotionId}`,
    accessToken: config.access_token,
    inputCodec: t.unknown,
    outputCodec: t.unknown,
    input: promotion,
  });
}
