"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.batchSmallInventory = batchSmallInventory;
const publish_request_1 = require("../request/publish-request");
const inventory_1 = require("../validators/inventory");
/**
 * Batch small inventory operations
 *
 * @see https://api.dsco.io/api/v3/inventory/batch/small
 *
 * @param config - Request configuration with access token
 * @param request - Batch inventory request
 * @returns Batch inventory response
 */
async function batchSmallInventory(config, request) {
    return (0, publish_request_1.publishRequest)(config.baseUri, {
        method: 'POST',
        path: '/inventory/batch/small',
        accessToken: config.access_token,
        inputCodec: inventory_1.UpdateInventoryRequestC,
        outputCodec: inventory_1.InventoryResponseC,
        input: request,
    });
}
