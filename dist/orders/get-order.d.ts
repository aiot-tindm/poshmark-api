import { DscoRequestConfig } from '../validators/auth';
import { GetOrderResponse } from '../validators/orders/order';
/**
 * Get order by order key
 *
 * @see https://api.dsco.io/api/v3/order/
 *
 * @param config - Request configuration with access token
 * @param orderKey - The order key to retrieve
 * @returns Order information
 */
export declare function getOrder(config: DscoRequestConfig, orderKey: string): Promise<GetOrderResponse>;
