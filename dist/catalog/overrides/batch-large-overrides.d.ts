import { DscoRequestConfig } from '../../validators/auth';
import { BatchCatalogOverridesRequest, CatalogResponse } from '../../validators/catalog';
/**
 * Batch large catalog overrides
 *
 * @see https://api.dsco.io/api/v3/catalog/overrides/batch/large
 *
 * @param config - Request configuration with access token
 * @param request - Batch overrides request
 * @returns Batch overrides response
 */
export declare function batchLargeOverrides(config: DscoRequestConfig, request: BatchCatalogOverridesRequest): Promise<CatalogResponse>;
