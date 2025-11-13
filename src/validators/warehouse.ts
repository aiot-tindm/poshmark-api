import * as t from 'io-ts';

/**
 * Warehouse validators and types
 * TypeScript types provided for better IDE support.
 */

/**
 * Warehouse ID
 */
export const WarehouseIdC = t.string;
export type WarehouseId = t.TypeOf<typeof WarehouseIdC>;

/**
 * Warehouse code
 */
export const WarehouseCodeC = t.string;
export type WarehouseCode = t.TypeOf<typeof WarehouseCodeC>;

/**
 * TypeScript types for complex objects (no runtime validation)
 */

export interface Warehouse {
  warehouseId?: string;
  warehouseCode?: string;
  name?: string;
  address?: WarehouseAddress;
  status?: string;
  capacity?: number;
  [key: string]: unknown;
}

export interface WarehouseAddress {
  street?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country?: string;
}

export interface RetailerWarehouse {
  retailerId?: string;
  warehouseId?: string;
  warehouseCode?: string;
  name?: string;
  isDefault?: boolean;
  [key: string]: unknown;
}

export interface WarehouseCodes {
  codes?: WarehouseCodeMapping[];
  [key: string]: unknown;
}

export interface WarehouseCodeMapping {
  internalCode?: string;
  externalCode?: string;
  warehouseName?: string;
}
