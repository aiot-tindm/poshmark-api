import { publishRequest } from '../request/publish-request';
import { DscoRequestConfig } from '../validators/auth';
import * as t from 'io-ts';

/**
 * Get catalog by ID
 *
 * @see https://api.dsco.io/api/v3/catalog
 *
 * @param config - Request configuration with access token
 * @param params - Query parameters including catalog ID
 * @returns Catalog data
 */
export async function getCatalogById(
  config: DscoRequestConfig,
  params: Record<string, string | number>,
): Promise<unknown> {
  return publishRequest(config.baseUri, {
    method: 'GET',
    path: '/catalog',
    accessToken: config.access_token,
    outputCodec: t.unknown,
    queryParams: params,
  });
}
