import { DscoRequestConfig } from '../validators/auth';
/**
 * Rate shop for shipping
 *
 * @see https://api.dsco.io/api/v3/rateshop
 *
 * @param config - Request configuration with access token
 * @param request - Rate shop request
 * @returns Rate shop response
 */
export declare function rateShop(config: DscoRequestConfig, request: unknown): Promise<unknown>;
