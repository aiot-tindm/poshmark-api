import * as t from 'io-ts';
import {NonEmptyStringC, SuccessFailResponseC} from './common-validation';

/**
 * Assortment object
 */
export const AssortmentC = t.intersection([
  t.type({
    name: NonEmptyStringC,
  }),
  t.partial({
    id: t.string,
  }),
]);

export type Assortment = t.TypeOf<typeof AssortmentC>;

/**
 * Create assortment request
 */
export const CreateAssortmentRequestC = t.type({
  name: NonEmptyStringC,
});

export type CreateAssortmentRequest = t.TypeOf<typeof CreateAssortmentRequestC>;

/**
 * Create assortment response
 */
export const CreateAssortmentResponseC = t.type({
  id: t.string,
  name: NonEmptyStringC,
});

export type CreateAssortmentResponse = t.TypeOf<
  typeof CreateAssortmentResponseC
>;

/**
 * Item key type
 */
export const ItemKeyTypeC = t.union([
  t.literal('SKU'),
  t.literal('UPC'),
  t.literal('EAN'),
  t.literal('MPN'),
  t.literal('ISBN'),
  t.literal('GTIN'),
]);

export type ItemKeyType = t.TypeOf<typeof ItemKeyTypeC>;

/**
 * Item key object
 */
export const ItemKeyObjC = t.intersection([
  t.type({
    itemKey: NonEmptyStringC,
    itemKeyType: ItemKeyTypeC,
  }),
  t.partial({
    dscoSupplierId: t.number,
    tradingPartnerId: t.string,
  }),
]);

export type ItemKeyObj = t.TypeOf<typeof ItemKeyObjC>;

/**
 * Add item to assortment request
 */
export const AddItemToAssortmentRequestC = t.partial({
  dscoItemId: t.number,
  itemKey: ItemKeyObjC,
});

export type AddItemToAssortmentRequest = t.TypeOf<
  typeof AddItemToAssortmentRequestC
>;

/**
 * Add item to assortment response
 */
export const AddItemToAssortmentResponseC = SuccessFailResponseC;

export type AddItemToAssortmentResponse = t.TypeOf<
  typeof AddItemToAssortmentResponseC
>;

/**
 * Success/Fail response (re-export for convenience)
 */
export {SuccessFailResponseC};
export type {SuccessFailResponse} from './common-validation';
