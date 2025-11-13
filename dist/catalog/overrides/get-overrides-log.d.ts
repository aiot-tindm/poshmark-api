import { DscoRequestConfig } from '../../validators/auth';
/**
 * Get catalog overrides log
 *
 * @see https://api.dsco.io/api/v3/catalog/overrides/log
 *
 * @param config - Request configuration with access token
 * @param params - Optional query parameters
 * @returns Catalog overrides log data
 */
export declare function getOverridesLog(config: DscoRequestConfig, params?: Record<string, string | number>): Promise<unknown>;
