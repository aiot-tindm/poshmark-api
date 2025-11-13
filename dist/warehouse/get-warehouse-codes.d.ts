import { DscoRequestConfig } from '../validators/auth';
/**
 * Get warehouse codes
 *
 * @see https://api.dsco.io/api/v3/retailer-warehouses/codes
 *
 * @param config - Request configuration with access token
 * @param params - Optional query parameters
 * @returns Warehouse codes data
 */
export declare function getWarehouseCodes(config: DscoRequestConfig, params?: Record<string, string | number>): Promise<unknown>;
