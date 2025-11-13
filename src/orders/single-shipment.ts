import {publishRequest} from '../request/publish-request';
import {DscoRequestConfig} from '../validators/auth';
import {
  SingleShipmentRequest,
  SingleShipmentRequestC,
  ShipmentResponse,
  ShipmentResponseC,
} from '../validators/orders/order';

/**
 * Create a single shipment
 *
 * @see https://api.dsco.io/api/v3/order/singleShipment
 *
 * @param config - Request configuration with access token
 * @param request - Single shipment request
 * @returns Shipment response
 */
export async function singleShipment(
  config: DscoRequestConfig,
  request: SingleShipmentRequest
): Promise<ShipmentResponse> {
  return publishRequest<SingleShipmentRequest, ShipmentResponse>(
    config.baseUri,
    {
      method: 'POST',
      path: '/order/singleShipment',
      accessToken: config.access_token,
      inputCodec: SingleShipmentRequestC,
      outputCodec: ShipmentResponseC,
      input: request,
    }
  );
}
