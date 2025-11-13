import { DscoRequestConfig } from '../validators/auth';
/**
 * Create an invoice
 *
 * @see https://api.dsco.io/api/v3/invoice
 *
 * @param config - Request configuration with access token
 * @param request - Invoice creation request
 * @returns Created invoice
 */
export declare function createInvoice(config: DscoRequestConfig, request: unknown): Promise<unknown>;
