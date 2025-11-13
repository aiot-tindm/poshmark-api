import { publishRequest } from '../request/publish-request';
import { DscoRequestConfig } from '../validators/auth';
import { Assortment, AssortmentC, SuccessFailResponseC } from '../validators/assortment';
import { SuccessFailResponse } from '../validators/common-validation';

/**
 * Update (rename) an assortment
 *
 * @see https://api.dsco.io/api/v3/assortment/{id}
 *
 * @param config - Request configuration with access token
 * @param id - The assortment ID
 * @param assortment - Updated assortment data
 * @returns Success response
 */
export async function updateAssortment(
  config: DscoRequestConfig,
  id: string,
  assortment: Assortment,
): Promise<SuccessFailResponse> {
  return publishRequest<Assortment, SuccessFailResponse>(config.baseUri, {
    method: 'PUT',
    path: `/assortment/${id}`,
    accessToken: config.access_token,
    inputCodec: AssortmentC,
    outputCodec: SuccessFailResponseC,
    input: assortment,
  });
}
