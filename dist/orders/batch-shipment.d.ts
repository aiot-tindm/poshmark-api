import { DscoRequestConfig } from '../validators/auth';
import { BatchShipmentRequest, ShipmentResponse } from '../validators/orders/order';
/**
 * Create batch shipments
 *
 * @see https://api.dsco.io/api/v3/order/shipment/batch/small
 *
 * @param config - Request configuration with access token
 * @param request - Batch shipment request
 * @returns Shipment response
 */
export declare function batchShipment(config: DscoRequestConfig, request: BatchShipmentRequest): Promise<ShipmentResponse>;
