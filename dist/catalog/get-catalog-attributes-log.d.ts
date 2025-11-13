import { DscoRequestConfig } from '../validators/auth';
/**
 * Get catalog attributes log
 *
 * @see https://api.dsco.io/api/v3/catalogattr/log
 *
 * @param config - Request configuration with access token
 * @param params - Optional query parameters
 * @returns Catalog attributes log data
 */
export declare function getCatalogAttributesLog(config: DscoRequestConfig, params?: Record<string, string | number>): Promise<unknown>;
