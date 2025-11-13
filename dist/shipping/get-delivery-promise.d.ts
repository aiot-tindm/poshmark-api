import { DscoRequestConfig } from '../validators/auth';
/**
 * Get delivery promise
 *
 * @see https://api.dsco.io/api/v3/deliverypromise
 *
 * @param config - Request configuration with access token
 * @param request - Delivery promise request
 * @returns Delivery promise response
 */
export declare function getDeliveryPromise(config: DscoRequestConfig, request: unknown): Promise<unknown>;
