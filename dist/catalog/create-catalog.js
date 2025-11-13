"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCatalog = createCatalog;
const publish_request_1 = require("../request/publish-request");
const catalog_1 = require("../validators/catalog");
/**
 * Create catalog entries
 *
 * @see https://api.dsco.io/api/v3/catalog
 *
 * @param config - Request configuration with access token
 * @param request - Catalog creation request
 * @returns Catalog creation response
 */
async function createCatalog(config, request) {
    return (0, publish_request_1.publishRequest)(config.baseUri, {
        method: 'POST',
        path: '/catalog',
        accessToken: config.access_token,
        inputCodec: catalog_1.CreateCatalogRequestC,
        outputCodec: catalog_1.CatalogResponseC,
        input: request,
    });
}
