import * as t from 'io-ts';
import {NonEmptyStringC} from './common-validation';

/**
 * Catalog item
 */
export const CatalogItemC = t.intersection([
  t.type({
    itemKey: NonEmptyStringC,
    itemKeyType: NonEmptyStringC,
  }),
  t.partial({
    dscoSupplierId: t.number,
    tradingPartnerId: t.string,
    title: t.string,
    description: t.string,
    brand: t.string,
    category: t.string,
    price: t.number,
    images: t.array(t.string),
    attributes: t.record(t.string, t.unknown),
  }),
]);

export type CatalogItem = t.TypeOf<typeof CatalogItemC>;

/**
 * Create catalog request
 */
export const CreateCatalogRequestC = t.type({
  items: t.array(CatalogItemC),
});

export type CreateCatalogRequest = t.TypeOf<typeof CreateCatalogRequestC>;

/**
 * Batch catalog request
 */
export const BatchCatalogRequestC = t.type({
  items: t.array(CatalogItemC),
});

export type BatchCatalogRequest = t.TypeOf<typeof BatchCatalogRequestC>;

/**
 * Catalog response
 */
export const CatalogResponseC = t.type({
  success: t.boolean,
});

export type CatalogResponse = t.TypeOf<typeof CatalogResponseC>;

/**
 * Catalog override item
 */
export const CatalogOverrideC = t.intersection([
  t.type({
    itemKey: NonEmptyStringC,
  }),
  t.partial({
    price: t.number,
    inventory: t.number,
    attributes: t.record(t.string, t.unknown),
  }),
]);

export type CatalogOverride = t.TypeOf<typeof CatalogOverrideC>;

/**
 * Batch catalog overrides request
 */
export const BatchCatalogOverridesRequestC = t.type({
  overrides: t.array(CatalogOverrideC),
});

export type BatchCatalogOverridesRequest = t.TypeOf<
  typeof BatchCatalogOverridesRequestC
>;
