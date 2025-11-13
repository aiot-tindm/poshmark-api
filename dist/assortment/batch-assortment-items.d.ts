import { DscoRequestConfig } from '../validators/auth';
/**
 * Batch add/remove items to/from an assortment
 *
 * @see https://api.dsco.io/api/v3/assortment/{id}/batch/small
 *
 * @param config - Request configuration with access token
 * @param id - The assortment ID
 * @param request - Batch items request
 * @returns Batch response
 */
export declare function batchAssortmentItems(config: DscoRequestConfig, id: string, request: unknown): Promise<unknown>;
