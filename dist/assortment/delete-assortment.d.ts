import { DscoRequestConfig } from '../validators/auth';
import { SuccessFailResponse } from '../validators/common-validation';
/**
 * Delete an assortment (removes all items from the assortment)
 *
 * @see https://api.dsco.io/api/v3/assortment/{id}
 *
 * @param config - Request configuration with access token
 * @param id - The assortment ID
 * @returns Success response
 */
export declare function deleteAssortment(config: DscoRequestConfig, id: string): Promise<SuccessFailResponse>;
