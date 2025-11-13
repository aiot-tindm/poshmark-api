"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.acknowledgeOrder = acknowledgeOrder;
const publish_request_1 = require("../request/publish-request");
const order_1 = require("../validators/orders/order");
/**
 * Acknowledge an order
 *
 * @see https://api.dsco.io/api/v3/order/acknowledge
 *
 * @param config - Request configuration with access token
 * @param request - Acknowledge order request
 * @returns Acknowledge order response
 */
async function acknowledgeOrder(config, request) {
    return (0, publish_request_1.publishRequest)(config.baseUri, {
        method: 'POST',
        path: '/order/acknowledge',
        accessToken: config.access_token,
        inputCodec: order_1.AcknowledgeOrderRequestC,
        outputCodec: order_1.AcknowledgeOrderResponseC,
        input: request,
    });
}
