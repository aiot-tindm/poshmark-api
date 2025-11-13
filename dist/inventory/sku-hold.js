"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.skuHold = skuHold;
const publish_request_1 = require("../request/publish-request");
const inventory_1 = require("../validators/inventory");
/**
 * SKU hold operations
 *
 * @see https://api.dsco.io/api/v3/inventory/skuHold
 *
 * @param config - Request configuration with access token
 * @param request - SKU hold request
 * @returns SKU hold response
 */
async function skuHold(config, request) {
    return (0, publish_request_1.publishRequest)(config.baseUri, {
        method: 'POST',
        path: '/inventory/skuHold',
        accessToken: config.access_token,
        inputCodec: inventory_1.SkuHoldRequestC,
        outputCodec: inventory_1.SkuHoldResponseC,
        input: request,
    });
}
