import {publishRequest} from '../request/publish-request';
import {DscoRequestConfig} from '../validators/auth';
import {
  CreateCatalogRequest,
  CreateCatalogRequestC,
  CatalogResponse,
  CatalogResponseC,
} from '../validators/catalog';

/**
 * Create catalog entries
 *
 * @see https://api.dsco.io/api/v3/catalog
 *
 * @param config - Request configuration with access token
 * @param request - Catalog creation request
 * @returns Catalog creation response
 */
export async function createCatalog(
  config: DscoRequestConfig,
  request: CreateCatalogRequest
): Promise<CatalogResponse> {
  return publishRequest<CreateCatalogRequest, CatalogResponse>(config.baseUri, {
    method: 'POST',
    path: '/catalog',
    accessToken: config.access_token,
    inputCodec: CreateCatalogRequestC,
    outputCodec: CatalogResponseC,
    input: request,
  });
}
