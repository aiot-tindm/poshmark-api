import { DscoRequestConfig } from '../validators/auth';
/**
 * Get shipment log (monitored shipments)
 *
 * @see https://api.dsco.io/api/v3/monitoredshipments/log
 *
 * @param config - Request configuration with access token
 * @param params - Optional query parameters
 * @returns Shipment log data
 */
export declare function getShipmentLog(config: DscoRequestConfig, params?: Record<string, string | number>): Promise<unknown>;
