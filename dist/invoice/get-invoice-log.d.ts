import { DscoRequestConfig } from '../validators/auth';
/**
 * Get invoice log
 *
 * @see https://api.dsco.io/api/v3/invoice/log
 *
 * @param config - Request configuration with access token
 * @param params - Optional query parameters
 * @returns Invoice log data
 */
export declare function getInvoiceLog(config: DscoRequestConfig, params?: Record<string, string | number>): Promise<unknown>;
