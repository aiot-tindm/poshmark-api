import { publishRequest } from '../request/publish-request';
import { PoshmarkRequestConfig } from '../validators/auth';
import {
  BatchCatalogRequest,
  BatchCatalogRequestC,
  CatalogResponse,
  CatalogResponseC,
} from '../validators/catalog';

/**
 * Batch small catalog operations
 *
 * @see https://api.dsco.io/api/v3/catalog/batch/small
 *
 * @param config - Request configuration with access token
 * @param request - Batch catalog request
 * @returns Batch catalog response
 */
export async function batchSmallCatalog(
  config: PoshmarkRequestConfig,
  request: BatchCatalogRequest,
): Promise<CatalogResponse> {
  return publishRequest<BatchCatalogRequest, CatalogResponse>(config.baseUri, {
    method: 'POST',
    path: '/catalog/batch/small',
    accessToken: config.access_token,
    inputCodec: BatchCatalogRequestC,
    outputCodec: CatalogResponseC,
    input: request,
  });
}
