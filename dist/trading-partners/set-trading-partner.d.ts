import { DscoRequestConfig } from '../validators/auth';
/**
 * Set trading partner configuration
 *
 * @see https://api.dsco.io/api/v3/tradingpartner
 *
 * @param config - Request configuration with access token
 * @param tradingPartner - The trading partner configuration
 * @returns The trading partner result
 */
export declare function setTradingPartner(config: DscoRequestConfig, tradingPartner: unknown): Promise<unknown>;
