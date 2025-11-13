import { DscoRequestConfig } from '../validators/auth';
/**
 * Get marketplace settlements
 *
 * @see https://api.dsco.io/api/v3/marketplace/settlements
 *
 * @param config - Request configuration with access token
 * @param params - Optional query parameters
 * @returns Marketplace settlements data
 */
export declare function getSettlements(config: DscoRequestConfig, params?: Record<string, string | number>): Promise<unknown>;
