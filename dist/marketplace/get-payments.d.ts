import { DscoRequestConfig } from '../validators/auth';
/**
 * Get marketplace payments
 *
 * @see https://api.dsco.io/api/v3/marketplace/payments
 *
 * @param config - Request configuration with access token
 * @param params - Optional query parameters
 * @returns Marketplace payments data
 */
export declare function getPayments(config: DscoRequestConfig, params?: Record<string, string | number>): Promise<unknown>;
