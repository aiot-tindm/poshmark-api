import { DscoRequestConfig } from '../validators/auth';
/**
 * Get catalog by ID
 *
 * @see https://api.dsco.io/api/v3/catalog
 *
 * @param config - Request configuration with access token
 * @param params - Query parameters including catalog ID
 * @returns Catalog data
 */
export declare function getCatalogById(config: DscoRequestConfig, params: Record<string, string | number>): Promise<unknown>;
