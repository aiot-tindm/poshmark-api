import * as t from 'io-ts';
/**
 * Shipping validators and types
 * TypeScript types provided for better IDE support.
 */
/**
 * Carrier code
 */
export declare const CarrierCodeC: t.StringC;
export type CarrierCode = t.TypeOf<typeof CarrierCodeC>;
/**
 * Tracking number
 */
export declare const TrackingNumberC: t.StringC;
export type TrackingNumber = t.TypeOf<typeof TrackingNumberC>;
/**
 * TypeScript types for complex objects (no runtime validation)
 */
export interface ShippingLabel {
    labelId?: string;
    trackingNumber?: string;
    carrier?: string;
    labelUrl?: string;
    labelFormat?: string;
    [key: string]: unknown;
}
export interface MonitoredShipment {
    shipmentId?: string;
    trackingNumber?: string;
    carrier?: string;
    status?: string;
    estimatedDeliveryDate?: string;
    [key: string]: unknown;
}
export interface DeliveryPromise {
    promiseDate?: string;
    minDays?: number;
    maxDays?: number;
    carrier?: string;
    [key: string]: unknown;
}
export interface RateShopOption {
    carrier?: string;
    service?: string;
    cost?: number;
    estimatedDays?: number;
    [key: string]: unknown;
}
