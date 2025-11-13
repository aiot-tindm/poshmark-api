import { DscoRequestConfig } from '../validators/auth';
/**
 * Batch small invoice operations
 *
 * @see https://api.dsco.io/api/v3/invoice/batch/small
 *
 * @param config - Request configuration with access token
 * @param request - Batch invoice request
 * @returns Batch invoice response
 */
export declare function batchSmallInvoice(config: DscoRequestConfig, request: unknown): Promise<unknown>;
