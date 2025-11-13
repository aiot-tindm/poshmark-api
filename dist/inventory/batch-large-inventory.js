"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.batchLargeInventory = batchLargeInventory;
const publish_request_1 = require("../request/publish-request");
const inventory_1 = require("../validators/inventory");
/**
 * Batch large inventory operations
 *
 * @see https://api.dsco.io/api/v3/inventory/batch/large
 *
 * @param config - Request configuration with access token
 * @param request - Batch inventory request
 * @returns Batch inventory response
 */
async function batchLargeInventory(config, request) {
    return (0, publish_request_1.publishRequest)(config.baseUri, {
        method: 'POST',
        path: '/inventory/batch/large',
        accessToken: config.access_token,
        inputCodec: inventory_1.UpdateInventoryRequestC,
        outputCodec: inventory_1.InventoryResponseC,
        input: request,
    });
}
