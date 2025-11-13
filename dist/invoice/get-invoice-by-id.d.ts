import { DscoRequestConfig } from '../validators/auth';
/**
 * Get invoice by ID
 *
 * @see https://api.dsco.io/api/v3/invoice
 *
 * @param config - Request configuration with access token
 * @param params - Query parameters including invoice ID
 * @returns Invoice data
 */
export declare function getInvoiceById(config: DscoRequestConfig, params: Record<string, string | number>): Promise<unknown>;
