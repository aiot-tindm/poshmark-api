import { publishRequest } from '../request/publish-request';
import { PoshmarkRequestConfig } from '../validators/auth';
import * as t from 'io-ts';

/**
 * Get items in an assortment
 *
 * @see https://api.dsco.io/api/v3/assortment/{id}/items
 *
 * @param config - Request configuration with access token
 * @param id - The assortment ID
 * @param params - Optional query parameters
 * @returns Assortment items
 */
export async function getAssortmentItems(
  config: PoshmarkRequestConfig,
  id: string,
  params?: Record<string, string | number>,
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'GET',
    path: `/assortment/${id}/items`,
    accessToken: config.access_token,
    outputCodec: t.unknown,
    queryParams: params,
  });
}
