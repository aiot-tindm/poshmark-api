import { publishRequest } from '../request/publish-request';
import { DscoRequestConfig } from '../validators/auth';
import {
  BatchCatalogRequest,
  BatchCatalogRequestC,
  CatalogResponse,
  CatalogResponseC,
} from '../validators/catalog';

/**
 * Batch large catalog operations
 *
 * @see https://api.dsco.io/api/v3/catalog/batch/large
 *
 * @param config - Request configuration with access token
 * @param request - Batch catalog request
 * @returns Batch catalog response
 */
export async function batchLargeCatalog(
  config: DscoRequestConfig,
  request: BatchCatalogRequest,
): Promise<CatalogResponse> {
  return publishRequest<BatchCatalogRequest, CatalogResponse>(config.baseUri, {
    method: 'POST',
    path: '/catalog/batch/large',
    accessToken: config.access_token,
    inputCodec: BatchCatalogRequestC,
    outputCodec: CatalogResponseC,
    input: request,
  });
}
