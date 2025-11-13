"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAssortment = createAssortment;
const publish_request_1 = require("../request/publish-request");
const assortment_1 = require("../validators/assortment");
/**
 * Create a new assortment
 *
 * @see https://api.dsco.io/api/v3/assortment
 *
 * @param config - Request configuration with access token
 * @param request - Assortment creation request
 * @returns Created assortment with ID
 */
async function createAssortment(config, request) {
    return (0, publish_request_1.publishRequest)(config.baseUri, {
        method: 'POST',
        path: '/assortment',
        accessToken: config.access_token,
        inputCodec: assortment_1.CreateAssortmentRequestC,
        outputCodec: assortment_1.CreateAssortmentResponseC,
        input: request,
    });
}
