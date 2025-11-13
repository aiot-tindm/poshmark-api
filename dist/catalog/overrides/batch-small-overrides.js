"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.batchSmallOverrides = batchSmallOverrides;
const publish_request_1 = require("../../request/publish-request");
const catalog_1 = require("../../validators/catalog");
/**
 * Batch small catalog overrides
 *
 * @see https://api.dsco.io/api/v3/catalog/overrides/batch/small
 *
 * @param config - Request configuration with access token
 * @param request - Batch overrides request
 * @returns Batch overrides response
 */
async function batchSmallOverrides(config, request) {
    return (0, publish_request_1.publishRequest)(config.baseUri, {
        method: 'POST',
        path: '/catalog/overrides/batch/small',
        accessToken: config.access_token,
        inputCodec: catalog_1.BatchCatalogOverridesRequestC,
        outputCodec: catalog_1.CatalogResponseC,
        input: request,
    });
}
