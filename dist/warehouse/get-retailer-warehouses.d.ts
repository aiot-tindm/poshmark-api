import { DscoRequestConfig } from '../validators/auth';
/**
 * Get retailer warehouses
 *
 * @see https://api.dsco.io/api/v3/retailer-warehouses
 *
 * @param config - Request configuration with access token
 * @param params - Optional query parameters
 * @returns Retailer warehouses data
 */
export declare function getRetailerWarehouses(config: DscoRequestConfig, params?: Record<string, string | number>): Promise<unknown>;
