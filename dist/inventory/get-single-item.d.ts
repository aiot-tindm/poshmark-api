import { DscoRequestConfig } from '../validators/auth';
/**
 * Get single inventory item
 *
 * @see https://api.dsco.io/api/v3/inventory/singleItem
 *
 * @param config - Request configuration with access token
 * @param params - Query parameters (itemKey, etc.)
 * @returns Single inventory item data
 */
export declare function getSingleItem(config: DscoRequestConfig, params: Record<string, string | number>): Promise<unknown>;
