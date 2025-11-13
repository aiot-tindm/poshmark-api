import { DscoRequestConfig } from '../validators/auth';
/**
 * Get catalog log
 *
 * @see https://api.dsco.io/api/v3/catalog/log
 *
 * @param config - Request configuration with access token
 * @param params - Optional query parameters
 * @returns Catalog log data
 */
export declare function getCatalogLog(config: DscoRequestConfig, params?: Record<string, string | number>): Promise<unknown>;
