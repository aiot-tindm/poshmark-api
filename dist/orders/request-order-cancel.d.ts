import { DscoRequestConfig } from '../validators/auth';
/**
 * Request order cancellation
 *
 * @see https://api.dsco.io/api/v3/order/request/cancel
 *
 * @param config - Request configuration with access token
 * @param request - Request order cancel request
 * @returns Request order cancel response
 */
export declare function requestOrderCancel(config: DscoRequestConfig, request: unknown): Promise<unknown>;
