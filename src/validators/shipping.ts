import * as t from 'io-ts';

/**
 * Shipping validators and types
 * TypeScript types provided for better IDE support.
 */

/**
 * Carrier code
 */
export const CarrierCodeC = t.string;
export type CarrierCode = t.TypeOf<typeof CarrierCodeC>;

/**
 * Tracking number
 */
export const TrackingNumberC = t.string;
export type TrackingNumber = t.TypeOf<typeof TrackingNumberC>;

/**
 * TypeScript types for complex objects (no runtime validation)
 */

/**
 * Shipment line item
 */
export interface ShipmentLineItem {
  /** Line number */
  lineNumber?: number;
  /** Quantity shipped */
  quantity?: number;
  /** Item ID */
  itemId?: string;
  /** SKU */
  sku?: string;
  /** Partner SKU */
  partnerSku?: string;
  [key: string]: unknown;
}

/**
 * Shipment object
 */
export interface Shipment {
  /** Tracking number */
  trackingNumber?: string;
  /** Carrier code */
  carrier?: string;
  /** Carrier name */
  carrierName?: string;
  /** Shipping method */
  shippingMethod?: string;
  /** Ship date (ISO-8601) */
  shipDate?: string;
  /** Estimated delivery date (ISO-8601) */
  estimatedDeliveryDate?: string;
  /** Line items in this shipment */
  lineItems?: ShipmentLineItem[];
  /** Shipment cost */
  cost?: number;
  /** Weight */
  weight?: number;
  /** Weight unit */
  weightUnit?: string;
  /** Package count */
  packageCount?: number;
  [key: string]: unknown;
}

/**
 * Create Shipment Request
 * Required: shipments array
 * One of dscoOrderId, poNumber, or supplierOrderNumber required to identify the order
 */
export interface CreateShipmentRequest {
  /** Shipments to create (required) */
  shipments: Shipment[];
  /** DSCO Order ID - one of dscoOrderId, poNumber, or supplierOrderNumber required */
  dscoOrderId?: string;
  /** PO Number - one of dscoOrderId, poNumber, or supplierOrderNumber required */
  poNumber?: string;
  /** Supplier Order Number - one of dscoOrderId, poNumber, or supplierOrderNumber required */
  supplierOrderNumber?: string;
  [key: string]: unknown;
}

/**
 * Shipping Label
 */
export interface ShippingLabel {
  labelId?: string;
  trackingNumber?: string;
  carrier?: string;
  labelUrl?: string;
  labelFormat?: string;
  shipDate?: string;
  [key: string]: unknown;
}

/**
 * Create Shipping Labels Request
 */
export interface CreateShippingLabelsRequest {
  /** Order identifier */
  orderId?: string;
  /** PO Number */
  poNumber?: string;
  /** Carrier */
  carrier?: string;
  /** Service level */
  serviceLevel?: string;
  /** Shipment items */
  items?: ShipmentLineItem[];
  /** From address */
  fromAddress?: {
    name?: string;
    address1?: string;
    address2?: string;
    city?: string;
    state?: string;
    postal?: string;
    country?: string;
  };
  /** Label format (PDF, PNG, etc.) */
  labelFormat?: string;
  [key: string]: unknown;
}

/**
 * Monitored Shipment
 */
export interface MonitoredShipment {
  shipmentId?: string;
  trackingNumber?: string;
  carrier?: string;
  status?: string;
  estimatedDeliveryDate?: string;
  actualDeliveryDate?: string;
  events?: Array<{
    timestamp?: string;
    status?: string;
    location?: string;
    description?: string;
  }>;
  [key: string]: unknown;
}

/**
 * Create Monitored Shipment Request
 */
export interface CreateMonitoredShipmentRequest {
  /** Tracking number (required) */
  trackingNumber: string;
  /** Carrier (required) */
  carrier: string;
  /** Order ID */
  orderId?: string;
  /** PO Number */
  poNumber?: string;
  /** Ship date */
  shipDate?: string;
  [key: string]: unknown;
}

/**
 * Delivery Promise
 */
export interface DeliveryPromise {
  promiseDate?: string;
  minDays?: number;
  maxDays?: number;
  carrier?: string;
  serviceLevel?: string;
  [key: string]: unknown;
}

/**
 * Determine Delivery Promise Request
 */
export interface DetermineDeliveryPromiseRequest {
  /** Origin postal code */
  originPostal?: string;
  /** Destination postal code */
  destinationPostal?: string;
  /** Carrier */
  carrier?: string;
  /** Service level */
  serviceLevel?: string;
  /** Ship date */
  shipDate?: string;
  [key: string]: unknown;
}

/**
 * Rate Shop Option
 */
export interface RateShopOption {
  carrier?: string;
  carrierName?: string;
  service?: string;
  serviceName?: string;
  cost?: number;
  estimatedDays?: number;
  estimatedDeliveryDate?: string;
  [key: string]: unknown;
}

/**
 * Rate Shop Request
 */
export interface RateShopRequest {
  /** Origin address */
  originAddress?: {
    postal?: string;
    city?: string;
    state?: string;
    country?: string;
  };
  /** Destination address */
  destinationAddress?: {
    postal?: string;
    city?: string;
    state?: string;
    country?: string;
  };
  /** Package details */
  packages?: Array<{
    weight?: number;
    weightUnit?: string;
    length?: number;
    width?: number;
    height?: number;
    dimensionUnit?: string;
  }>;
  /** Ship date */
  shipDate?: string;
  [key: string]: unknown;
}
