import { DscoRequestConfig } from '../validators/auth';
/**
 * Export retailer warehouses
 *
 * @see https://api.dsco.io/api/v3/retailer-warehouses/export
 *
 * @param config - Request configuration with access token
 * @param params - Optional query parameters
 * @returns Retailer warehouses export data
 */
export declare function exportRetailerWarehouses(config: DscoRequestConfig, params?: Record<string, string | number>): Promise<unknown>;
