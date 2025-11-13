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

/**
 * Warehouse Address
 */
export interface WarehouseAddress {
  street?: string;
  street2?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country?: string;
}

/**
 * Retailer Warehouse Code
 * Used for setting warehouse code mappings
 */
export interface RetailerWarehouseCode {
  /** Warehouse code (required) */
  warehouseCode: string;
  /** Warehouse name (required) */
  warehouseName: string;
  /** DSCO supplier ID */
  dscoSupplierId?: string;
  /** Trading partner ID */
  tradingPartnerId?: string;
  /** Warehouse address */
  address?: WarehouseAddress;
  /** Is default warehouse */
  isDefault?: boolean;
  /** Status */
  status?: 'active' | 'inactive';
  [key: string]: unknown;
}

/**
 * Set Retailer Warehouse Codes Request
 */
export interface SetRetailerWarehouseCodesRequest {
  /** Array of warehouse codes to set (required) */
  warehouseCodes: RetailerWarehouseCode[];
  [key: string]: unknown;
}

/**
 * Set Warehouse Codes Response
 */
export interface SetWarehouseCodesResponse {
  /** Success status */
  success?: boolean;
  /** Successfully applied codes */
  applied?: RetailerWarehouseCode[];
  /** Duplicate codes found */
  duplicated?: RetailerWarehouseCode[];
  /** Unauthorized codes */
  unauthorized?: RetailerWarehouseCode[];
  /** Errors if any */
  errors?: string[];
  /** Status message */
  message?: string;
  [key: string]: unknown;
}

/**
 * Warehouse
 */
export interface Warehouse {
  warehouseId?: string;
  warehouseCode?: string;
  name?: string;
  address?: WarehouseAddress;
  status?: string;
  capacity?: number;
  supplierId?: string;
  tradingPartnerId?: string;
  coordinates?: {
    latitude?: number;
    longitude?: number;
  };
  operatingHours?: string;
  contactInfo?: {
    name?: string;
    email?: string;
    phone?: string;
  };
  [key: string]: unknown;
}

/**
 * Retailer Warehouse
 */
export interface RetailerWarehouse {
  retailerId?: string;
  warehouseId?: string;
  warehouseCode?: string;
  name?: string;
  isDefault?: boolean;
  address?: WarehouseAddress;
  tradingPartnerId?: string;
  status?: string;
  [key: string]: unknown;
}

/**
 * Warehouse Codes
 */
export interface WarehouseCodes {
  codes?: WarehouseCodeMapping[];
  totalCount?: number;
  [key: string]: unknown;
}

/**
 * Warehouse Code Mapping
 */
export interface WarehouseCodeMapping {
  internalCode?: string;
  externalCode?: string;
  retailerCode?: string;
  supplierCode?: string;
  warehouseName?: string;
  warehouseId?: string;
  tradingPartnerId?: string;
}
