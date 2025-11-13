"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.batchShipment = batchShipment;
const publish_request_1 = require("../request/publish-request");
const order_1 = require("../validators/orders/order");
/**
 * Create batch shipments
 *
 * @see https://api.dsco.io/api/v3/order/shipment/batch/small
 *
 * @param config - Request configuration with access token
 * @param request - Batch shipment request
 * @returns Shipment response
 */
async function batchShipment(config, request) {
    return (0, publish_request_1.publishRequest)(config.baseUri, {
        method: 'POST',
        path: '/order/shipment/batch/small',
        accessToken: config.access_token,
        inputCodec: order_1.BatchShipmentRequestC,
        outputCodec: order_1.ShipmentResponseC,
        input: request,
    });
}
