import * as t from 'io-ts';
/**
 * Inventory item
 */
export declare const InventoryItemC: t.IntersectionC<[t.TypeC<{
    itemKey: t.RefinementC<t.StringC, string>;
    quantity: t.RefinementC<t.NumberC, number>;
}>, t.PartialC<{
    dscoItemId: t.NumberC;
    warehouseCode: t.StringC;
    availableDate: t.StringC;
}>]>;
export type InventoryItem = t.TypeOf<typeof InventoryItemC>;
/**
 * Create/update inventory request
 */
export declare const UpdateInventoryRequestC: t.TypeC<{
    items: t.ArrayC<t.IntersectionC<[t.TypeC<{
        itemKey: t.RefinementC<t.StringC, string>;
        quantity: t.RefinementC<t.NumberC, number>;
    }>, t.PartialC<{
        dscoItemId: t.NumberC;
        warehouseCode: t.StringC;
        availableDate: t.StringC;
    }>]>>;
}>;
export type UpdateInventoryRequest = t.TypeOf<typeof UpdateInventoryRequestC>;
/**
 * Inventory response
 */
export declare const InventoryResponseC: t.TypeC<{
    success: t.BooleanC;
}>;
export type InventoryResponse = t.TypeOf<typeof InventoryResponseC>;
/**
 * Get single inventory item response
 */
export declare const GetSingleInventoryItemResponseC: t.IntersectionC<[t.TypeC<{
    itemKey: t.RefinementC<t.StringC, string>;
    quantity: t.RefinementC<t.NumberC, number>;
}>, t.PartialC<{
    dscoItemId: t.NumberC;
    warehouseCode: t.StringC;
    availableDate: t.StringC;
}>]>;
export type GetSingleInventoryItemResponse = t.TypeOf<typeof GetSingleInventoryItemResponseC>;
/**
 * SKU hold request
 */
export declare const SkuHoldRequestC: t.TypeC<{
    itemKey: t.RefinementC<t.StringC, string>;
    quantity: t.RefinementC<t.NumberC, number>;
    holdDurationMinutes: t.RefinementC<t.NumberC, number>;
}>;
export type SkuHoldRequest = t.TypeOf<typeof SkuHoldRequestC>;
/**
 * SKU hold response
 */
export declare const SkuHoldResponseC: t.TypeC<{
    success: t.BooleanC;
    holdId: t.StringC;
}>;
export type SkuHoldResponse = t.TypeOf<typeof SkuHoldResponseC>;
