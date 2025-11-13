import { DscoRequestConfig } from '../validators/auth';
/**
 * SCA backstop inventory
 *
 * @see https://api.dsco.io/api/v3/inventory/sca/backstop
 *
 * @param config - Request configuration with access token
 * @param request - SCA backstop request
 * @returns SCA backstop response
 */
export declare function scaBackstop(config: DscoRequestConfig, request: unknown): Promise<unknown>;
