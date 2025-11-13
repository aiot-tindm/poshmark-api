import {publishRequest} from '../request/publish-request';
import {DscoRequestConfig} from '../validators/auth';
import * as t from 'io-ts';

/**
 * Create a marketplace promotion
 *
 * @see https://api.dsco.io/api/v3/marketplace/promotion
 *
 * @param config - Request configuration with access token
 * @param promotion - The promotion object to create
 * @returns The created promotion
 */
export async function createPromotion(
  config: DscoRequestConfig,
  promotion: unknown
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'POST',
    path: '/marketplace/promotion',
    accessToken: config.access_token,
    inputCodec: t.unknown,
    outputCodec: t.unknown,
    input: promotion,
  });
}
