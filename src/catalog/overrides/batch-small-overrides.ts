import {publishRequest} from '../../request/publish-request';
import {DscoRequestConfig} from '../../validators/auth';
import {
  BatchCatalogOverridesRequest,
  BatchCatalogOverridesRequestC,
  CatalogResponse,
  CatalogResponseC,
} from '../../validators/catalog';

/**
 * Batch small catalog overrides
 *
 * @see https://api.dsco.io/api/v3/catalog/overrides/batch/small
 *
 * @param config - Request configuration with access token
 * @param request - Batch overrides request
 * @returns Batch overrides response
 */
export async function batchSmallOverrides(
  config: DscoRequestConfig,
  request: BatchCatalogOverridesRequest
): Promise<CatalogResponse> {
  return publishRequest<BatchCatalogOverridesRequest, CatalogResponse>(
    config.baseUri,
    {
      method: 'POST',
      path: '/catalog/overrides/batch/small',
      accessToken: config.access_token,
      inputCodec: BatchCatalogOverridesRequestC,
      outputCodec: CatalogResponseC,
      input: request,
    }
  );
}
