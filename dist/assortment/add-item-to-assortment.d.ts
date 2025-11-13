import { DscoRequestConfig } from '../validators/auth';
import { AddItemToAssortmentRequest, AddItemToAssortmentResponse } from '../validators/assortment';
/**
 * Add a single item to an assortment
 *
 * @see https://api.dsco.io/api/v3/assortment/{id}/item
 *
 * @param config - Request configuration with access token
 * @param id - The assortment ID
 * @param request - Item to add (dscoItemId or itemKey)
 * @returns Success response
 */
export declare function addItemToAssortment(config: DscoRequestConfig, id: string, request: AddItemToAssortmentRequest): Promise<AddItemToAssortmentResponse>;
