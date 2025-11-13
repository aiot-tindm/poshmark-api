import { DscoRequestConfig } from '../validators/auth';
import { SuccessFailResponse } from '../validators/common-validation';
import * as t from 'io-ts';
/**
 * Bulk add items request codec
 */
declare const BulkAddItemsRequestC: t.PartialC<{
    dscoItemIds: t.ArrayC<t.NumberC>;
    itemKeys: t.ArrayC<t.IntersectionC<[t.TypeC<{
        itemKey: t.StringC;
        itemKeyType: t.StringC;
    }>, t.PartialC<{
        dscoSupplierId: t.NumberC;
        tradingPartnerId: t.StringC;
    }>]>>;
}>;
export type BulkAddItemsRequest = t.TypeOf<typeof BulkAddItemsRequestC>;
/**
 * Add multiple items to an assortment (up to 100 itemKeys or 1,000 dscoItemIds)
 *
 * @see https://api.dsco.io/api/v3/assortment/{id}/items
 *
 * @param config - Request configuration with access token
 * @param id - The assortment ID
 * @param request - Items to add (dscoItemIds and/or itemKeys)
 * @returns Success response
 */
export declare function addItemsToAssortment(config: DscoRequestConfig, id: string, request: BulkAddItemsRequest): Promise<SuccessFailResponse>;
export {};
