import { DscoRequestConfig } from '../validators/auth';
import { BatchCatalogRequest, CatalogResponse } from '../validators/catalog';
/**
 * Batch small catalog operations
 *
 * @see https://api.dsco.io/api/v3/catalog/batch/small
 *
 * @param config - Request configuration with access token
 * @param request - Batch catalog request
 * @returns Batch catalog response
 */
export declare function batchSmallCatalog(config: DscoRequestConfig, request: BatchCatalogRequest): Promise<CatalogResponse>;
