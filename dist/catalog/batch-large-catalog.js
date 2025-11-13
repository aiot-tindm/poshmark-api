"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.batchLargeCatalog = batchLargeCatalog;
const publish_request_1 = require("../request/publish-request");
const catalog_1 = require("../validators/catalog");
/**
 * Batch large catalog operations
 *
 * @see https://api.dsco.io/api/v3/catalog/batch/large
 *
 * @param config - Request configuration with access token
 * @param request - Batch catalog request
 * @returns Batch catalog response
 */
async function batchLargeCatalog(config, request) {
    return (0, publish_request_1.publishRequest)(config.baseUri, {
        method: 'POST',
        path: '/catalog/batch/large',
        accessToken: config.access_token,
        inputCodec: catalog_1.BatchCatalogRequestC,
        outputCodec: catalog_1.CatalogResponseC,
        input: request,
    });
}
