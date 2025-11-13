import * as t from 'io-ts';
/**
 * Order status
 */
export declare const OrderStatusC: t.UnionC<[t.LiteralC<"pending">, t.LiteralC<"acknowledged">, t.LiteralC<"shipped">, t.LiteralC<"cancelled">, t.LiteralC<"completed">]>;
export type OrderStatus = t.TypeOf<typeof OrderStatusC>;
/**
 * Order item
 */
export declare const OrderItemC: t.IntersectionC<[t.TypeC<{
    lineNumber: t.NumberC;
    itemKey: t.RefinementC<t.StringC, string>;
    quantity: t.RefinementC<t.NumberC, number>;
    unitPrice: t.NumberC;
}>, t.PartialC<{
    dscoItemId: t.NumberC;
    title: t.StringC;
    totalPrice: t.NumberC;
    status: t.UnionC<[t.LiteralC<"pending">, t.LiteralC<"acknowledged">, t.LiteralC<"shipped">, t.LiteralC<"cancelled">, t.LiteralC<"completed">]>;
}>]>;
export type OrderItem = t.TypeOf<typeof OrderItemC>;
/**
 * Order
 */
export declare const OrderC: t.IntersectionC<[t.TypeC<{
    orderKey: t.RefinementC<t.StringC, string>;
    items: t.ArrayC<t.IntersectionC<[t.TypeC<{
        lineNumber: t.NumberC;
        itemKey: t.RefinementC<t.StringC, string>;
        quantity: t.RefinementC<t.NumberC, number>;
        unitPrice: t.NumberC;
    }>, t.PartialC<{
        dscoItemId: t.NumberC;
        title: t.StringC;
        totalPrice: t.NumberC;
        status: t.UnionC<[t.LiteralC<"pending">, t.LiteralC<"acknowledged">, t.LiteralC<"shipped">, t.LiteralC<"cancelled">, t.LiteralC<"completed">]>;
    }>]>>;
}>, t.PartialC<{
    dscoOrderId: t.NumberC;
    orderDate: t.RefinementC<t.StringC, string>;
    status: t.UnionC<[t.LiteralC<"pending">, t.LiteralC<"acknowledged">, t.LiteralC<"shipped">, t.LiteralC<"cancelled">, t.LiteralC<"completed">]>;
    totalAmount: t.NumberC;
    shippingAddress: t.TypeC<{
        name: t.StringC;
        address1: t.StringC;
        address2: t.StringC;
        city: t.StringC;
        state: t.StringC;
        postalCode: t.StringC;
        country: t.StringC;
    }>;
}>]>;
export type Order = t.TypeOf<typeof OrderC>;
/**
 * Get order response
 */
export declare const GetOrderResponseC: t.IntersectionC<[t.TypeC<{
    orderKey: t.RefinementC<t.StringC, string>;
    items: t.ArrayC<t.IntersectionC<[t.TypeC<{
        lineNumber: t.NumberC;
        itemKey: t.RefinementC<t.StringC, string>;
        quantity: t.RefinementC<t.NumberC, number>;
        unitPrice: t.NumberC;
    }>, t.PartialC<{
        dscoItemId: t.NumberC;
        title: t.StringC;
        totalPrice: t.NumberC;
        status: t.UnionC<[t.LiteralC<"pending">, t.LiteralC<"acknowledged">, t.LiteralC<"shipped">, t.LiteralC<"cancelled">, t.LiteralC<"completed">]>;
    }>]>>;
}>, t.PartialC<{
    dscoOrderId: t.NumberC;
    orderDate: t.RefinementC<t.StringC, string>;
    status: t.UnionC<[t.LiteralC<"pending">, t.LiteralC<"acknowledged">, t.LiteralC<"shipped">, t.LiteralC<"cancelled">, t.LiteralC<"completed">]>;
    totalAmount: t.NumberC;
    shippingAddress: t.TypeC<{
        name: t.StringC;
        address1: t.StringC;
        address2: t.StringC;
        city: t.StringC;
        state: t.StringC;
        postalCode: t.StringC;
        country: t.StringC;
    }>;
}>]>;
export type GetOrderResponse = t.TypeOf<typeof GetOrderResponseC>;
/**
 * Acknowledge order request
 */
export declare const AcknowledgeOrderRequestC: t.TypeC<{
    orderKey: t.RefinementC<t.StringC, string>;
}>;
export type AcknowledgeOrderRequest = t.TypeOf<typeof AcknowledgeOrderRequestC>;
/**
 * Acknowledge order response
 */
export declare const AcknowledgeOrderResponseC: t.TypeC<{
    success: t.BooleanC;
}>;
export type AcknowledgeOrderResponse = t.TypeOf<typeof AcknowledgeOrderResponseC>;
/**
 * Shipment information
 */
export declare const ShipmentC: t.IntersectionC<[t.TypeC<{
    orderKey: t.RefinementC<t.StringC, string>;
    trackingNumber: t.RefinementC<t.StringC, string>;
    carrier: t.RefinementC<t.StringC, string>;
}>, t.PartialC<{
    shipmentDate: t.RefinementC<t.StringC, string>;
    items: t.ArrayC<t.TypeC<{
        lineNumber: t.NumberC;
        quantity: t.RefinementC<t.NumberC, number>;
    }>>;
}>]>;
export type Shipment = t.TypeOf<typeof ShipmentC>;
/**
 * Single shipment request
 */
export declare const SingleShipmentRequestC: t.IntersectionC<[t.TypeC<{
    orderKey: t.RefinementC<t.StringC, string>;
    trackingNumber: t.RefinementC<t.StringC, string>;
    carrier: t.RefinementC<t.StringC, string>;
}>, t.PartialC<{
    shipmentDate: t.RefinementC<t.StringC, string>;
    items: t.ArrayC<t.TypeC<{
        lineNumber: t.NumberC;
        quantity: t.RefinementC<t.NumberC, number>;
    }>>;
}>]>;
export type SingleShipmentRequest = t.TypeOf<typeof SingleShipmentRequestC>;
/**
 * Batch shipment request
 */
export declare const BatchShipmentRequestC: t.TypeC<{
    shipments: t.ArrayC<t.IntersectionC<[t.TypeC<{
        orderKey: t.RefinementC<t.StringC, string>;
        trackingNumber: t.RefinementC<t.StringC, string>;
        carrier: t.RefinementC<t.StringC, string>;
    }>, t.PartialC<{
        shipmentDate: t.RefinementC<t.StringC, string>;
        items: t.ArrayC<t.TypeC<{
            lineNumber: t.NumberC;
            quantity: t.RefinementC<t.NumberC, number>;
        }>>;
    }>]>>;
}>;
export type BatchShipmentRequest = t.TypeOf<typeof BatchShipmentRequestC>;
/**
 * Shipment response
 */
export declare const ShipmentResponseC: t.TypeC<{
    success: t.BooleanC;
}>;
export type ShipmentResponse = t.TypeOf<typeof ShipmentResponseC>;
