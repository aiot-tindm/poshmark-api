import * as t from 'io-ts';
import { SuccessFailResponseC } from './common-validation';
/**
 * Assortment object
 */
export declare const AssortmentC: t.IntersectionC<[t.TypeC<{
    name: t.RefinementC<t.StringC, string>;
}>, t.PartialC<{
    id: t.StringC;
}>]>;
export type Assortment = t.TypeOf<typeof AssortmentC>;
/**
 * Create assortment request
 */
export declare const CreateAssortmentRequestC: t.TypeC<{
    name: t.RefinementC<t.StringC, string>;
}>;
export type CreateAssortmentRequest = t.TypeOf<typeof CreateAssortmentRequestC>;
/**
 * Create assortment response
 */
export declare const CreateAssortmentResponseC: t.TypeC<{
    id: t.StringC;
    name: t.RefinementC<t.StringC, string>;
}>;
export type CreateAssortmentResponse = t.TypeOf<typeof CreateAssortmentResponseC>;
/**
 * Item key type
 */
export declare const ItemKeyTypeC: t.UnionC<[t.LiteralC<"SKU">, t.LiteralC<"UPC">, t.LiteralC<"EAN">, t.LiteralC<"MPN">, t.LiteralC<"ISBN">, t.LiteralC<"GTIN">]>;
export type ItemKeyType = t.TypeOf<typeof ItemKeyTypeC>;
/**
 * Item key object
 */
export declare const ItemKeyObjC: t.IntersectionC<[t.TypeC<{
    itemKey: t.RefinementC<t.StringC, string>;
    itemKeyType: t.UnionC<[t.LiteralC<"SKU">, t.LiteralC<"UPC">, t.LiteralC<"EAN">, t.LiteralC<"MPN">, t.LiteralC<"ISBN">, t.LiteralC<"GTIN">]>;
}>, t.PartialC<{
    dscoSupplierId: t.NumberC;
    tradingPartnerId: t.StringC;
}>]>;
export type ItemKeyObj = t.TypeOf<typeof ItemKeyObjC>;
/**
 * Add item to assortment request
 */
export declare const AddItemToAssortmentRequestC: t.PartialC<{
    dscoItemId: t.NumberC;
    itemKey: t.IntersectionC<[t.TypeC<{
        itemKey: t.RefinementC<t.StringC, string>;
        itemKeyType: t.UnionC<[t.LiteralC<"SKU">, t.LiteralC<"UPC">, t.LiteralC<"EAN">, t.LiteralC<"MPN">, t.LiteralC<"ISBN">, t.LiteralC<"GTIN">]>;
    }>, t.PartialC<{
        dscoSupplierId: t.NumberC;
        tradingPartnerId: t.StringC;
    }>]>;
}>;
export type AddItemToAssortmentRequest = t.TypeOf<typeof AddItemToAssortmentRequestC>;
/**
 * Add item to assortment response
 */
export declare const AddItemToAssortmentResponseC: t.TypeC<{
    success: t.BooleanC;
}>;
export type AddItemToAssortmentResponse = t.TypeOf<typeof AddItemToAssortmentResponseC>;
/**
 * Success/Fail response (re-export for convenience)
 */
export { SuccessFailResponseC };
export type { SuccessFailResponse } from './common-validation';
