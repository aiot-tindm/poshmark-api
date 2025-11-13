import * as t from 'io-ts';
import {
  NonEmptyStringC,
  PositiveNumberC,
  IsoDateStringC,
} from '../common-validation';

/**
 * Order status
 */
export const OrderStatusC = t.union([
  t.literal('pending'),
  t.literal('acknowledged'),
  t.literal('shipped'),
  t.literal('cancelled'),
  t.literal('completed'),
]);

export type OrderStatus = t.TypeOf<typeof OrderStatusC>;

/**
 * Order item
 */
export const OrderItemC = t.intersection([
  t.type({
    lineNumber: t.number,
    itemKey: NonEmptyStringC,
    quantity: PositiveNumberC,
    unitPrice: t.number,
  }),
  t.partial({
    dscoItemId: t.number,
    title: t.string,
    totalPrice: t.number,
    status: OrderStatusC,
  }),
]);

export type OrderItem = t.TypeOf<typeof OrderItemC>;

/**
 * Order
 */
export const OrderC = t.intersection([
  t.type({
    orderKey: NonEmptyStringC,
    items: t.array(OrderItemC),
  }),
  t.partial({
    dscoOrderId: t.number,
    orderDate: IsoDateStringC,
    status: OrderStatusC,
    totalAmount: t.number,
    shippingAddress: t.type({
      name: t.string,
      address1: t.string,
      address2: t.string,
      city: t.string,
      state: t.string,
      postalCode: t.string,
      country: t.string,
    }),
  }),
]);

export type Order = t.TypeOf<typeof OrderC>;

/**
 * Get order response
 */
export const GetOrderResponseC = OrderC;

export type GetOrderResponse = t.TypeOf<typeof GetOrderResponseC>;

/**
 * Acknowledge order request
 */
export const AcknowledgeOrderRequestC = t.type({
  orderKey: NonEmptyStringC,
});

export type AcknowledgeOrderRequest = t.TypeOf<typeof AcknowledgeOrderRequestC>;

/**
 * Acknowledge order response
 */
export const AcknowledgeOrderResponseC = t.type({
  success: t.boolean,
});

export type AcknowledgeOrderResponse = t.TypeOf<
  typeof AcknowledgeOrderResponseC
>;

/**
 * Shipment information
 */
export const ShipmentC = t.intersection([
  t.type({
    orderKey: NonEmptyStringC,
    trackingNumber: NonEmptyStringC,
    carrier: NonEmptyStringC,
  }),
  t.partial({
    shipmentDate: IsoDateStringC,
    items: t.array(
      t.type({
        lineNumber: t.number,
        quantity: PositiveNumberC,
      })
    ),
  }),
]);

export type Shipment = t.TypeOf<typeof ShipmentC>;

/**
 * Single shipment request
 */
export const SingleShipmentRequestC = ShipmentC;

export type SingleShipmentRequest = t.TypeOf<typeof SingleShipmentRequestC>;

/**
 * Batch shipment request
 */
export const BatchShipmentRequestC = t.type({
  shipments: t.array(ShipmentC),
});

export type BatchShipmentRequest = t.TypeOf<typeof BatchShipmentRequestC>;

/**
 * Shipment response
 */
export const ShipmentResponseC = t.type({
  success: t.boolean,
});

export type ShipmentResponse = t.TypeOf<typeof ShipmentResponseC>;
