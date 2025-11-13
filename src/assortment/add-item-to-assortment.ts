import { publishRequest } from '../request/publish-request';
import { DscoRequestConfig } from '../validators/auth';
import {
  AddItemToAssortmentRequest,
  AddItemToAssortmentRequestC,
  AddItemToAssortmentResponse,
  AddItemToAssortmentResponseC,
} from '../validators/assortment';

/**
 * Add a single item to an assortment
 *
 * @see https://api.dsco.io/api/v3/assortment/{id}/item
 *
 * @param config - Request configuration with access token
 * @param id - The assortment ID
 * @param request - Item to add (dscoItemId or itemKey)
 * @returns Success response
 */
export async function addItemToAssortment(
  config: DscoRequestConfig,
  id: string,
  request: AddItemToAssortmentRequest,
): Promise<AddItemToAssortmentResponse> {
  return publishRequest<AddItemToAssortmentRequest, AddItemToAssortmentResponse>(
    config.baseUri,
    {
      method: 'POST',
      path: `/assortment/${id}/item`,
      accessToken: config.access_token,
      inputCodec: AddItemToAssortmentRequestC,
      outputCodec: AddItemToAssortmentResponseC,
      input: request,
    },
  );
}
