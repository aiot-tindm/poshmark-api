import { DscoRequestConfig } from '../validators/auth';
/**
 * Get inventory
 *
 * @see https://api.dsco.io/api/v3/inventory
 *
 * @param config - Request configuration with access token
 * @param params - Optional query parameters
 * @returns Inventory data
 */
export declare function getInventory(config: DscoRequestConfig, params?: Record<string, string | number>): Promise<unknown>;
