import { DscoRequestConfig } from '../validators/auth';
/**
 * Acknowledge order items
 *
 * @see https://api.dsco.io/api/v3/order/acknowledge/items
 *
 * @param config - Request configuration with access token
 * @param request - Acknowledge order items request
 * @returns Acknowledge order items response
 */
export declare function acknowledgeOrderItems(config: DscoRequestConfig, request: unknown): Promise<unknown>;
