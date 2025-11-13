import { DscoRequestConfig } from '../validators/auth';
import { SingleShipmentRequest, ShipmentResponse } from '../validators/orders/order';
/**
 * Create a single shipment
 *
 * @see https://api.dsco.io/api/v3/order/singleShipment
 *
 * @param config - Request configuration with access token
 * @param request - Single shipment request
 * @returns Shipment response
 */
export declare function singleShipment(config: DscoRequestConfig, request: SingleShipmentRequest): Promise<ShipmentResponse>;
