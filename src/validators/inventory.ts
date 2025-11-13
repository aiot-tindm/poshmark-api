import * as t from 'io-ts';
import { NonEmptyStringC, PositiveNumberC, NonNegativeNumberC } from './common-validation';

/**
 * Inventory item
 */
export const InventoryItemC = t.intersection([
  t.type({
    itemKey: NonEmptyStringC,
    quantity: NonNegativeNumberC,
  }),
  t.partial({
    dscoItemId: t.number,
    warehouseCode: t.string,
    availableDate: t.string,
  }),
]);

export type InventoryItem = t.TypeOf<typeof InventoryItemC>;

/**
 * Create/update inventory request
 */
export const UpdateInventoryRequestC = t.type({
  items: t.array(InventoryItemC),
});

export type UpdateInventoryRequest = t.TypeOf<typeof UpdateInventoryRequestC>;

/**
 * Inventory response
 */
export const InventoryResponseC = t.type({
  success: t.boolean,
});

export type InventoryResponse = t.TypeOf<typeof InventoryResponseC>;

/**
 * Get single inventory item response
 */
export const GetSingleInventoryItemResponseC = InventoryItemC;

export type GetSingleInventoryItemResponse = t.TypeOf<typeof GetSingleInventoryItemResponseC>;

/**
 * SKU hold request
 */
export const SkuHoldRequestC = t.type({
  itemKey: NonEmptyStringC,
  quantity: PositiveNumberC,
  holdDurationMinutes: PositiveNumberC,
});

export type SkuHoldRequest = t.TypeOf<typeof SkuHoldRequestC>;

/**
 * SKU hold response
 */
export const SkuHoldResponseC = t.type({
  success: t.boolean,
  holdId: t.string,
});

export type SkuHoldResponse = t.TypeOf<typeof SkuHoldResponseC>;
