import * as t from 'io-ts';

/**
 * Order validators and types
 * Note: Full order objects use t.unknown due to complexity.
 * TypeScript types provided for better IDE support.
 */

/**
 * Order key identifier
 */
export const OrderKeyC = t.string;
export type OrderKey = t.TypeOf<typeof OrderKeyC>;

/**
 * Order acknowledge request
 */
export const AcknowledgeOrderRequestC = t.type({
  orderKey: t.string,
});

export type AcknowledgeOrderRequest = t.TypeOf<typeof AcknowledgeOrderRequestC>;

/**
 * Order cancellation request
 */
export const CancelOrderRequestC = t.type({
  orderKey: t.string,
  reason: t.union([t.string, t.undefined]),
});

export type CancelOrderRequest = t.TypeOf<typeof CancelOrderRequestC>;

/**
 * Single shipment request
 */
export const SingleShipmentRequestC = t.type({
  orderKey: t.string,
  trackingNumber: t.string,
  carrier: t.string,
  shipDate: t.union([t.string, t.undefined]),
});

export type SingleShipmentRequest = t.TypeOf<typeof SingleShipmentRequestC>;

/**
 * TypeScript types for complex objects (no runtime validation)
 */

/**
 * Shipping address for an order
 * Required fields: city, region, postal
 */
export interface OrderShipping {
  /** Attention line */
  attention?: string;
  /** First name (deprecated - use name field) */
  firstName?: string;
  /** Last name (deprecated - use name field) */
  lastName?: string;
  /** Full name */
  name?: string;
  /** Company name */
  company?: string;
  /** Address line 1 (deprecated - use address array) */
  address1?: string;
  /** Address line 2 (deprecated - use address array) */
  address2?: string;
  /** Address lines */
  address?: string[];
  /** City (required) */
  city: string;
  /** State/Region (required) */
  region: string;
  /** State (deprecated - use region) */
  state?: string;
  /** Postal/ZIP code (required) */
  postal: string;
  /** Country code */
  country?: string;
  /** Phone number */
  phone?: string;
  /** Email address */
  email?: string;
  /** Store number */
  storeNumber?: string;
  /** Address type */
  addressType?: 'Residential' | 'Commercial';
  /** Carrier (deprecated) */
  carrier?: string;
  /** Shipping method (deprecated) */
  method?: string;
  [key: string]: unknown;
}

/**
 * Order line item
 * Required: quantity
 * One of the item identifiers (dscoItemId, sku, partnerSku, upc, ean) must be provided
 */
export interface OrderLineItem {
  /** Quantity of this item on the order (required) */
  quantity: number;
  /** DSCO's supplier ID */
  dscoSupplierId?: string;
  /** Trading partner ID */
  dscoTradingPartnerId?: string;
  /** DSCO's unique ID for this item */
  dscoItemId?: string;
  /** SKU identifier */
  sku?: string;
  /** Partner SKU (max 90 chars) */
  partnerSku?: string;
  /** UPC identifier (6 or 12 digits) */
  upc?: string;
  /** EAN identifier (8 or 13 digits) */
  ean?: string;
  /** MPN identifier */
  mpn?: string;
  /** ISBN identifier (10 or 13 digits) */
  isbn?: string;
  /** GTIN identifier (8, 12-14 digits) */
  gtin?: string;
  /** Item title */
  title?: string;
  /** Localized titles */
  titleI18n?: Record<string, string>;
  /** Expected cost */
  expectedCost?: number;
  /** Consumer price */
  consumerPrice?: number;
  /** Estimated ship date (ISO-8601) */
  estimatedShipDate?: string;
  /** Reason for estimated ship date */
  estimatedShipReason?: string;
  /** Returns message */
  returnsMessage?: string;
  /** Localized returns messages */
  returnsMessageI18n?: Record<string, string>;
  /** Personalization text */
  personalization?: string;
  /** Supplier's warehouse code */
  warehouseCode?: string;
  /** Retailer's warehouse code */
  warehouseRetailerCode?: string;
  /** DSCO's warehouse ID */
  warehouseDscoId?: string;
  /** Line item status */
  status?: 'accepted' | 'rejected' | 'cancelled';
  /** Status reason */
  statusReason?: string;
  /** Ready for pickup flag */
  readyForPickup?: boolean;
  /** Cancelled quantity */
  cancelledQuantity?: number;
  /** Cancellation reason */
  cancelledReason?: string;
  /** Cancel code */
  cancelCode?: string;
  /** Cancel requested by retailer */
  cancelRequested?: boolean;
  /** Accepted quantity */
  acceptedQuantity?: number;
  /** Rejected quantity */
  rejectedQuantity?: number;
  /** Line number */
  lineNumber?: number;
  [key: string]: unknown;
}

/**
 * Create Order Request
 * Required fields: poNumber, lineItems, shipping
 */
export interface CreateOrderRequest {
  /** PO Number (required) */
  poNumber: string;
  /** Order line items (required) */
  lineItems: OrderLineItem[];
  /** Shipping address (required) */
  shipping: OrderShipping;
  /** DSCO supplier ID */
  dscoSupplierId?: string | number;
  /** Trading partner ID */
  dscoTradingPartnerId?: string;
  /** Supplier order number */
  supplierOrderNumber?: string;
  /** Order date (ISO-8601) */
  orderDate?: string;
  /** Expected ship date (ISO-8601) */
  expectedShipDate?: string;
  /** Cancel date (ISO-8601) */
  cancelDate?: string;
  /** Requested ship carrier */
  requestedShipCarrier?: string;
  /** Requested ship method */
  requestedShipMethod?: string;
  /** Shipping instructions */
  shippingInstructions?: string;
  /** Customer notes */
  customerNotes?: string;
  /** Gift message */
  giftMessage?: string;
  /** Localized gift messages */
  giftMessageI18n?: Record<string, string>;
  /** Order total */
  total?: number;
  /** Subtotal */
  subTotal?: number;
  /** Tax amount */
  tax?: number;
  /** Shipping cost */
  shippingCost?: number;
  /** Currency code */
  currency?: string;
  /** Custom attributes */
  [key: string]: unknown;
}

/**
 * Update Order Request for batch operations
 */
export interface UpdateOrderRequest {
  /** DSCO Order ID or PO Number to identify the order */
  dscoOrderId?: number;
  /** PO Number */
  poNumber?: string;
  /** Supplier order number */
  supplierOrderNumber?: string;
  /** Line items to update */
  lineItems?: Partial<OrderLineItem>[];
  /** Expected ship date */
  expectedShipDate?: string;
  /** Order status */
  status?: string;
  [key: string]: unknown;
}

/**
 * Order response/query object
 */
export interface Order {
  orderKey?: string;
  dscoOrderId?: number;
  retailerOrderId?: string;
  poNumber?: string;
  orderDate?: string;
  shipDate?: string;
  status?: string;
  items?: OrderLineItem[];
  shipping?: OrderShipping;
  total?: number;
  [key: string]: unknown;
}

/**
 * Simplified order item for responses
 */
export interface OrderItem {
  lineNumber?: number;
  itemKey?: string;
  quantity?: number;
  unitPrice?: number;
  [key: string]: unknown;
}

/**
 * Order query parameters
 */
export interface OrderQuery {
  orderKey?: string;
  retailerOrderId?: string;
  poNumber?: string;
  startDate?: string;
  endDate?: string;
  status?: string;
  page?: number;
  limit?: number;
}
