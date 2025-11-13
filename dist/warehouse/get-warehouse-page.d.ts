import { DscoRequestConfig } from '../validators/auth';
/**
 * Get warehouse page with pagination
 *
 * @see https://api.dsco.io/api/v3/warehouse/page
 *
 * @param config - Request configuration with access token
 * @param params - Query parameters for pagination
 * @returns Page of warehouses
 */
export declare function getWarehousePage(config: DscoRequestConfig, params?: Record<string, string | number>): Promise<unknown>;
