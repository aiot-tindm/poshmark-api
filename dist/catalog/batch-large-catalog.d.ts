import { DscoRequestConfig } from '../validators/auth';
import { BatchCatalogRequest, CatalogResponse } from '../validators/catalog';
/**
 * Batch large catalog operations
 *
 * @see https://api.dsco.io/api/v3/catalog/batch/large
 *
 * @param config - Request configuration with access token
 * @param request - Batch catalog request
 * @returns Batch catalog response
 */
export declare function batchLargeCatalog(config: DscoRequestConfig, request: BatchCatalogRequest): Promise<CatalogResponse>;
