import { DscoRequestConfig } from '../validators/auth';
/**
 * Get trading partner
 *
 * @see https://api.dsco.io/api/v3/tradingpartner
 *
 * @param config - Request configuration with access token
 * @param params - Optional query parameters
 * @returns Trading partner data
 */
export declare function getTradingPartner(config: DscoRequestConfig, params?: Record<string, string | number>): Promise<unknown>;
