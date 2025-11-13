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

export interface Order {
  orderKey?: string;
  dscoOrderId?: number;
  retailerOrderId?: string;
  orderDate?: string;
  shipDate?: string;
  status?: string;
  items?: OrderItem[];
  [key: string]: unknown;
}

export interface OrderItem {
  lineNumber?: number;
  itemKey?: string;
  quantity?: number;
  unitPrice?: number;
  [key: string]: unknown;
}

export interface OrderQuery {
  orderKey?: string;
  retailerOrderId?: string;
  startDate?: string;
  endDate?: string;
  status?: string;
  page?: number;
  limit?: number;
}
