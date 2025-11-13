import { DscoRequestConfig } from '../validators/auth';
/**
 * Get orders page with pagination
 *
 * @see https://api.dsco.io/api/v3/order/page
 *
 * @param config - Request configuration with access token
 * @param params - Query parameters for pagination
 * @returns Page of orders
 */
export declare function getOrderPage(config: DscoRequestConfig, params?: Record<string, string | number>): Promise<unknown>;
