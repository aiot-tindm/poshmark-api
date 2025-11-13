import { publishRequest } from '../request/publish-request';
import { PoshmarkRequestConfig } from '../validators/auth';
import {
  CreateAssortmentRequest,
  CreateAssortmentRequestC,
  CreateAssortmentResponse,
  CreateAssortmentResponseC,
} from '../validators/assortment';

/**
 * Create a new assortment
 *
 * @see https://api.dsco.io/api/v3/assortment
 *
 * @param config - Request configuration with access token
 * @param request - Assortment creation request
 * @returns Created assortment with ID
 */
export async function createAssortment(
  config: PoshmarkRequestConfig,
  request: CreateAssortmentRequest,
): Promise<CreateAssortmentResponse> {
  return publishRequest<CreateAssortmentRequest, CreateAssortmentResponse>(config.baseUri, {
    method: 'POST',
    path: '/assortment',
    accessToken: config.access_token,
    inputCodec: CreateAssortmentRequestC,
    outputCodec: CreateAssortmentResponseC,
    input: request,
  });
}
