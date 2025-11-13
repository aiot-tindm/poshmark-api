import * as t from 'io-ts';
/**
 * Catalog item
 */
export declare const CatalogItemC: t.IntersectionC<[t.TypeC<{
    itemKey: t.RefinementC<t.StringC, string>;
    itemKeyType: t.RefinementC<t.StringC, string>;
}>, t.PartialC<{
    dscoSupplierId: t.NumberC;
    tradingPartnerId: t.StringC;
    title: t.StringC;
    description: t.StringC;
    brand: t.StringC;
    category: t.StringC;
    price: t.NumberC;
    images: t.ArrayC<t.StringC>;
    attributes: t.RecordC<t.StringC, t.UnknownC>;
}>]>;
export type CatalogItem = t.TypeOf<typeof CatalogItemC>;
/**
 * Create catalog request
 */
export declare const CreateCatalogRequestC: t.TypeC<{
    items: t.ArrayC<t.IntersectionC<[t.TypeC<{
        itemKey: t.RefinementC<t.StringC, string>;
        itemKeyType: t.RefinementC<t.StringC, string>;
    }>, t.PartialC<{
        dscoSupplierId: t.NumberC;
        tradingPartnerId: t.StringC;
        title: t.StringC;
        description: t.StringC;
        brand: t.StringC;
        category: t.StringC;
        price: t.NumberC;
        images: t.ArrayC<t.StringC>;
        attributes: t.RecordC<t.StringC, t.UnknownC>;
    }>]>>;
}>;
export type CreateCatalogRequest = t.TypeOf<typeof CreateCatalogRequestC>;
/**
 * Batch catalog request
 */
export declare const BatchCatalogRequestC: t.TypeC<{
    items: t.ArrayC<t.IntersectionC<[t.TypeC<{
        itemKey: t.RefinementC<t.StringC, string>;
        itemKeyType: t.RefinementC<t.StringC, string>;
    }>, t.PartialC<{
        dscoSupplierId: t.NumberC;
        tradingPartnerId: t.StringC;
        title: t.StringC;
        description: t.StringC;
        brand: t.StringC;
        category: t.StringC;
        price: t.NumberC;
        images: t.ArrayC<t.StringC>;
        attributes: t.RecordC<t.StringC, t.UnknownC>;
    }>]>>;
}>;
export type BatchCatalogRequest = t.TypeOf<typeof BatchCatalogRequestC>;
/**
 * Catalog response
 */
export declare const CatalogResponseC: t.TypeC<{
    success: t.BooleanC;
}>;
export type CatalogResponse = t.TypeOf<typeof CatalogResponseC>;
/**
 * Catalog override item
 */
export declare const CatalogOverrideC: t.IntersectionC<[t.TypeC<{
    itemKey: t.RefinementC<t.StringC, string>;
}>, t.PartialC<{
    price: t.NumberC;
    inventory: t.NumberC;
    attributes: t.RecordC<t.StringC, t.UnknownC>;
}>]>;
export type CatalogOverride = t.TypeOf<typeof CatalogOverrideC>;
/**
 * Batch catalog overrides request
 */
export declare const BatchCatalogOverridesRequestC: t.TypeC<{
    overrides: t.ArrayC<t.IntersectionC<[t.TypeC<{
        itemKey: t.RefinementC<t.StringC, string>;
    }>, t.PartialC<{
        price: t.NumberC;
        inventory: t.NumberC;
        attributes: t.RecordC<t.StringC, t.UnknownC>;
    }>]>>;
}>;
export type BatchCatalogOverridesRequest = t.TypeOf<typeof BatchCatalogOverridesRequestC>;
