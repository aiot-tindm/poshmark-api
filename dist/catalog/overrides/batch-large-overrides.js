"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.batchLargeOverrides = batchLargeOverrides;
const publish_request_1 = require("../../request/publish-request");
const catalog_1 = require("../../validators/catalog");
/**
 * Batch large catalog overrides
 *
 * @see https://api.dsco.io/api/v3/catalog/overrides/batch/large
 *
 * @param config - Request configuration with access token
 * @param request - Batch overrides request
 * @returns Batch overrides response
 */
async function batchLargeOverrides(config, request) {
    return (0, publish_request_1.publishRequest)(config.baseUri, {
        method: 'POST',
        path: '/catalog/overrides/batch/large',
        accessToken: config.access_token,
        inputCodec: catalog_1.BatchCatalogOverridesRequestC,
        outputCodec: catalog_1.CatalogResponseC,
        input: request,
    });
}
