import { DscoRequestConfig } from '../validators/auth';
/**
 * Cancel order item
 *
 * @see https://api.dsco.io/api/v3/order/item/cancel
 *
 * @param config - Request configuration with access token
 * @param request - Cancel order item request
 * @returns Cancel order item response
 */
export declare function cancelOrderItem(config: DscoRequestConfig, request: unknown): Promise<unknown>;
