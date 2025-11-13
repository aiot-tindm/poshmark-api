import { DscoRequestConfig } from '../validators/auth';
import { AcknowledgeOrderRequest, AcknowledgeOrderResponse } from '../validators/orders/order';
/**
 * Acknowledge an order
 *
 * @see https://api.dsco.io/api/v3/order/acknowledge
 *
 * @param config - Request configuration with access token
 * @param request - Acknowledge order request
 * @returns Acknowledge order response
 */
export declare function acknowledgeOrder(config: DscoRequestConfig, request: AcknowledgeOrderRequest): Promise<AcknowledgeOrderResponse>;
