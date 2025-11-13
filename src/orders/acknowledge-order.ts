import { publishRequest } from '../request/publish-request';
import { DscoRequestConfig } from '../validators/auth';
import {
  AcknowledgeOrderRequest,
  AcknowledgeOrderRequestC,
  AcknowledgeOrderResponse,
  AcknowledgeOrderResponseC,
} from '../validators/orders/order';

/**
 * Acknowledge an order
 *
 * @see https://api.dsco.io/api/v3/order/acknowledge
 *
 * @param config - Request configuration with access token
 * @param request - Acknowledge order request
 * @returns Acknowledge order response
 */
export async function acknowledgeOrder(
  config: DscoRequestConfig,
  request: AcknowledgeOrderRequest,
): Promise<AcknowledgeOrderResponse> {
  return publishRequest<AcknowledgeOrderRequest, AcknowledgeOrderResponse>(config.baseUri, {
    method: 'POST',
    path: '/order/acknowledge',
    accessToken: config.access_token,
    inputCodec: AcknowledgeOrderRequestC,
    outputCodec: AcknowledgeOrderResponseC,
    input: request,
  });
}
