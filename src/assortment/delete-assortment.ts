import { publishRequest } from '../request/publish-request';
import { PoshmarkRequestConfig } from '../validators/auth';
import { SuccessFailResponse, SuccessFailResponseC } from '../validators/common-validation';

/**
 * Delete an assortment (removes all items from the assortment)
 *
 * @see https://api.dsco.io/api/v3/assortment/{id}
 *
 * @param config - Request configuration with access token
 * @param id - The assortment ID
 * @returns Success response
 */
export async function deleteAssortment(
  config: PoshmarkRequestConfig,
  id: string,
): Promise<SuccessFailResponse> {
  return publishRequest<never, SuccessFailResponse>(config.baseUri, {
    method: 'DELETE',
    path: `/assortment/${id}`,
    accessToken: config.access_token,
    outputCodec: SuccessFailResponseC,
  });
}
