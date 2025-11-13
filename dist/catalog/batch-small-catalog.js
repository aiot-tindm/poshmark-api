"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.batchSmallCatalog = batchSmallCatalog;
const publish_request_1 = require("../request/publish-request");
const catalog_1 = require("../validators/catalog");
/**
 * Batch small catalog operations
 *
 * @see https://api.dsco.io/api/v3/catalog/batch/small
 *
 * @param config - Request configuration with access token
 * @param request - Batch catalog request
 * @returns Batch catalog response
 */
async function batchSmallCatalog(config, request) {
    return (0, publish_request_1.publishRequest)(config.baseUri, {
        method: 'POST',
        path: '/catalog/batch/small',
        accessToken: config.access_token,
        inputCodec: catalog_1.BatchCatalogRequestC,
        outputCodec: catalog_1.CatalogResponseC,
        input: request,
    });
}
