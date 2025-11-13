import { DscoRequestConfig } from '../validators/auth';
/**
 * Get order log
 *
 * @see https://api.dsco.io/api/v3/order/log
 *
 * @param config - Request configuration with access token
 * @param params - Optional query parameters
 * @returns Order log data
 */
export declare function getOrderLog(config: DscoRequestConfig, params?: Record<string, string | number>): Promise<unknown>;
