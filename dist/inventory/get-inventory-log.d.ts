import { DscoRequestConfig } from '../validators/auth';
/**
 * Get inventory log
 *
 * @see https://api.dsco.io/api/v3/inventory/log
 *
 * @param config - Request configuration with access token
 * @param params - Optional query parameters
 * @returns Inventory log data
 */
export declare function getInventoryLog(config: DscoRequestConfig, params?: Record<string, string | number>): Promise<unknown>;
