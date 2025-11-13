"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShipmentResponseC = exports.BatchShipmentRequestC = exports.SingleShipmentRequestC = exports.ShipmentC = exports.AcknowledgeOrderResponseC = exports.AcknowledgeOrderRequestC = exports.GetOrderResponseC = exports.OrderC = exports.OrderItemC = exports.OrderStatusC = void 0;
const t = __importStar(require("io-ts"));
const common_validation_1 = require("../common-validation");
/**
 * Order status
 */
exports.OrderStatusC = t.union([
    t.literal('pending'),
    t.literal('acknowledged'),
    t.literal('shipped'),
    t.literal('cancelled'),
    t.literal('completed'),
]);
/**
 * Order item
 */
exports.OrderItemC = t.intersection([
    t.type({
        lineNumber: t.number,
        itemKey: common_validation_1.NonEmptyStringC,
        quantity: common_validation_1.PositiveNumberC,
        unitPrice: t.number,
    }),
    t.partial({
        dscoItemId: t.number,
        title: t.string,
        totalPrice: t.number,
        status: exports.OrderStatusC,
    }),
]);
/**
 * Order
 */
exports.OrderC = t.intersection([
    t.type({
        orderKey: common_validation_1.NonEmptyStringC,
        items: t.array(exports.OrderItemC),
    }),
    t.partial({
        dscoOrderId: t.number,
        orderDate: common_validation_1.IsoDateStringC,
        status: exports.OrderStatusC,
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
/**
 * Get order response
 */
exports.GetOrderResponseC = exports.OrderC;
/**
 * Acknowledge order request
 */
exports.AcknowledgeOrderRequestC = t.type({
    orderKey: common_validation_1.NonEmptyStringC,
});
/**
 * Acknowledge order response
 */
exports.AcknowledgeOrderResponseC = t.type({
    success: t.boolean,
});
/**
 * Shipment information
 */
exports.ShipmentC = t.intersection([
    t.type({
        orderKey: common_validation_1.NonEmptyStringC,
        trackingNumber: common_validation_1.NonEmptyStringC,
        carrier: common_validation_1.NonEmptyStringC,
    }),
    t.partial({
        shipmentDate: common_validation_1.IsoDateStringC,
        items: t.array(t.type({
            lineNumber: t.number,
            quantity: common_validation_1.PositiveNumberC,
        })),
    }),
]);
/**
 * Single shipment request
 */
exports.SingleShipmentRequestC = exports.ShipmentC;
/**
 * Batch shipment request
 */
exports.BatchShipmentRequestC = t.type({
    shipments: t.array(exports.ShipmentC),
});
/**
 * Shipment response
 */
exports.ShipmentResponseC = t.type({
    success: t.boolean,
});
