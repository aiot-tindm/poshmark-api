import { DscoRequestConfig } from '../validators/auth';
import { CreateCatalogRequest, CatalogResponse } from '../validators/catalog';
/**
 * Create catalog entries
 *
 * @see https://api.dsco.io/api/v3/catalog
 *
 * @param config - Request configuration with access token
 * @param request - Catalog creation request
 * @returns Catalog creation response
 */
export declare function createCatalog(config: DscoRequestConfig, request: CreateCatalogRequest): Promise<CatalogResponse>;
