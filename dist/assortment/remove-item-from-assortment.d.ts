import { DscoRequestConfig } from '../validators/auth';
import { AddItemToAssortmentRequest, AddItemToAssortmentResponse } from '../validators/assortment';
/**
 * Remove a single item from an assortment
 *
 * @see https://api.dsco.io/api/v3/assortment/{id}/item
 *
 * @param config - Request configuration with access token
 * @param id - The assortment ID
 * @param request - Item to remove (dscoItemId or itemKey)
 * @returns Success response
 */
export declare function removeItemFromAssortment(config: DscoRequestConfig, id: string, request: AddItemToAssortmentRequest): Promise<AddItemToAssortmentResponse>;
