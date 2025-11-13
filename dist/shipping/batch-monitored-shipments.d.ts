import { DscoRequestConfig } from '../validators/auth';
/**
 * Batch monitored shipments
 *
 * @see https://api.dsco.io/api/v3/monitoredshipments/batch/small
 *
 * @param config - Request configuration with access token
 * @param request - Batch monitored shipments request
 * @returns Batch monitored shipments response
 */
export declare function batchMonitoredShipments(config: DscoRequestConfig, request: unknown): Promise<unknown>;
