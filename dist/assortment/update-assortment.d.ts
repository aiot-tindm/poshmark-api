import { DscoRequestConfig } from '../validators/auth';
import { Assortment } from '../validators/assortment';
import { SuccessFailResponse } from '../validators/common-validation';
/**
 * Update (rename) an assortment
 *
 * @see https://api.dsco.io/api/v3/assortment/{id}
 *
 * @param config - Request configuration with access token
 * @param id - The assortment ID
 * @param assortment - Updated assortment data
 * @returns Success response
 */
export declare function updateAssortment(config: DscoRequestConfig, id: string, assortment: Assortment): Promise<SuccessFailResponse>;
