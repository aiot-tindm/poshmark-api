"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.singleShipment = singleShipment;
const publish_request_1 = require("../request/publish-request");
const order_1 = require("../validators/orders/order");
/**
 * Create a single shipment
 *
 * @see https://api.dsco.io/api/v3/order/singleShipment
 *
 * @param config - Request configuration with access token
 * @param request - Single shipment request
 * @returns Shipment response
 */
async function singleShipment(config, request) {
    return (0, publish_request_1.publishRequest)(config.baseUri, {
        method: 'POST',
        path: '/order/singleShipment',
        accessToken: config.access_token,
        inputCodec: order_1.SingleShipmentRequestC,
        outputCodec: order_1.ShipmentResponseC,
        input: request,
    });
}
