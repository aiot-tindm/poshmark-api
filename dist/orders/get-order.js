"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrder = getOrder;
const publish_request_1 = require("../request/publish-request");
const order_1 = require("../validators/orders/order");
/**
 * Get order by order key
 *
 * @see https://api.dsco.io/api/v3/order/
 *
 * @param config - Request configuration with access token
 * @param orderKey - The order key to retrieve
 * @returns Order information
 */
async function getOrder(config, orderKey) {
    return (0, publish_request_1.publishRequest)(config.baseUri, {
        method: 'GET',
        path: '/order/',
        accessToken: config.access_token,
        outputCodec: order_1.GetOrderResponseC,
        queryParams: { orderKey },
    });
}
