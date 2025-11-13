import { DscoRequestConfig } from '../validators/auth';
/**
 * Create shipping labels
 *
 * @see https://api.dsco.io/api/v3/shippinglabels
 *
 * @param config - Request configuration with access token
 * @param request - Shipping labels request
 * @returns Shipping labels response
 */
export declare function getShippingLabels(config: DscoRequestConfig, request: unknown): Promise<unknown>;
