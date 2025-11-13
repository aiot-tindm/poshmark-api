import { publishRequest } from '../request/publish-request';
import { PoshmarkRequestConfig } from '../validators/auth';
import {
  BatchShipmentRequest,
  BatchShipmentRequestC,
  ShipmentResponse,
  ShipmentResponseC,
} from '../validators/orders/order';

/**
 * Create batch shipments
 *
 * @see https://api.dsco.io/api/v3/order/shipment/batch/small
 *
 * @param config - Request configuration with access token
 * @param request - Batch shipment request
 * @returns Shipment response
 */
export async function batchShipment(
  config: PoshmarkRequestConfig,
  request: BatchShipmentRequest,
): Promise<ShipmentResponse> {
  return publishRequest<BatchShipmentRequest, ShipmentResponse>(config.baseUri, {
    method: 'POST',
    path: '/order/shipment/batch/small',
    accessToken: config.access_token,
    inputCodec: BatchShipmentRequestC,
    outputCodec: ShipmentResponseC,
    input: request,
  });
}
