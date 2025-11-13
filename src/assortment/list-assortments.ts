import { publishRequest } from '../request/publish-request';
import { PoshmarkRequestConfig } from '../validators/auth';
import * as t from 'io-ts';
import { AssortmentC } from '../validators/assortment';

/**
 * List all assortments
 *
 * @see https://api.dsco.io/api/v3/assortment
 *
 * @param config - Request configuration with access token
 * @returns Array of assortments
 */
export async function listAssortments(config: PoshmarkRequestConfig): Promise<unknown[]> {
  return publishRequest(config.baseUri, {
    method: 'GET',
    path: '/assortment',
    accessToken: config.access_token,
    outputCodec: t.array(AssortmentC),
  });
}
