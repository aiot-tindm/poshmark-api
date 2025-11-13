import * as t from 'io-ts';
/**
 * Order validators and types
 * Note: Full order objects use t.unknown due to complexity.
 * TypeScript types provided for better IDE support.
 */
/**
 * Order key identifier
 */
export declare const OrderKeyC: t.StringC;
export type OrderKey = t.TypeOf<typeof OrderKeyC>;
/**
 * Order acknowledge request
 */
export declare const AcknowledgeOrderRequestC: t.TypeC<{
    orderKey: t.StringC;
}>;
export type AcknowledgeOrderRequest = t.TypeOf<typeof AcknowledgeOrderRequestC>;
/**
 * Order cancellation request
 */
export declare const CancelOrderRequestC: t.TypeC<{
    orderKey: t.StringC;
    reason: t.UnionC<[t.StringC, t.UndefinedC]>;
}>;
export type CancelOrderRequest = t.TypeOf<typeof CancelOrderRequestC>;
/**
 * Single shipment request
 */
export declare const SingleShipmentRequestC: t.TypeC<{
    orderKey: t.StringC;
    trackingNumber: t.StringC;
    carrier: t.StringC;
    shipDate: t.UnionC<[t.StringC, t.UndefinedC]>;
}>;
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
