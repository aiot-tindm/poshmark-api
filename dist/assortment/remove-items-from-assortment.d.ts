import { DscoRequestConfig } from '../validators/auth';
import { SuccessFailResponse } from '../validators/common-validation';
import * as t from 'io-ts';
/**
 * Bulk remove items request codec (same as add)
 */
declare const BulkRemoveItemsRequestC: t.PartialC<{
    dscoItemIds: t.ArrayC<t.NumberC>;
    itemKeys: t.ArrayC<t.IntersectionC<[t.TypeC<{
        itemKey: t.StringC;
        itemKeyType: t.StringC;
    }>, t.PartialC<{
        dscoSupplierId: t.NumberC;
        tradingPartnerId: t.StringC;
    }>]>>;
}>;
export type BulkRemoveItemsRequest = t.TypeOf<typeof BulkRemoveItemsRequestC>;
/**
 * Remove multiple items from an assortment
 *
 * @see https://api.dsco.io/api/v3/assortment/{id}/items
 *
 * @param config - Request configuration with access token
 * @param id - The assortment ID
 * @param request - Items to remove (dscoItemIds and/or itemKeys)
 * @returns Success response
 */
export declare function removeItemsFromAssortment(config: DscoRequestConfig, id: string, request: BulkRemoveItemsRequest): Promise<SuccessFailResponse>;
export {};
