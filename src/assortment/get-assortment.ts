import { publishRequest } from '../request/publish-request';
import { PoshmarkRequestConfig } from '../validators/auth';
import { Assortment, AssortmentC } from '../validators/assortment';

/**
 * Get a single assortment by ID
 *
 * @see https://api.dsco.io/api/v3/assortment/{id}
 *
 * @param config - Request configuration with access token
 * @param id - The assortment ID
 * @returns Assortment data
 */
export async function getAssortment(
  config: PoshmarkRequestConfig,
  id: string,
): Promise<Assortment> {
  return publishRequest<never, Assortment>(config.baseUri, {
    method: 'GET',
    path: `/assortment/${id}`,
    accessToken: config.access_token,
    outputCodec: AssortmentC,
  });
}
