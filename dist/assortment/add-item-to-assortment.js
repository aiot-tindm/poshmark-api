"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addItemToAssortment = addItemToAssortment;
const publish_request_1 = require("../request/publish-request");
const assortment_1 = require("../validators/assortment");
/**
 * Add a single item to an assortment
 *
 * @see https://api.dsco.io/api/v3/assortment/{id}/item
 *
 * @param config - Request configuration with access token
 * @param id - The assortment ID
 * @param request - Item to add (dscoItemId or itemKey)
 * @returns Success response
 */
async function addItemToAssortment(config, id, request) {
    return (0, publish_request_1.publishRequest)(config.baseUri, {
        method: 'POST',
        path: `/assortment/${id}/item`,
        accessToken: config.access_token,
        inputCodec: assortment_1.AddItemToAssortmentRequestC,
        outputCodec: assortment_1.AddItemToAssortmentResponseC,
        input: request,
    });
}
