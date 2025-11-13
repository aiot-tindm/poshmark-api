"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeItemFromAssortment = removeItemFromAssortment;
const publish_request_1 = require("../request/publish-request");
const assortment_1 = require("../validators/assortment");
/**
 * Remove a single item from an assortment
 *
 * @see https://api.dsco.io/api/v3/assortment/{id}/item
 *
 * @param config - Request configuration with access token
 * @param id - The assortment ID
 * @param request - Item to remove (dscoItemId or itemKey)
 * @returns Success response
 */
async function removeItemFromAssortment(config, id, request) {
    return (0, publish_request_1.publishRequest)(config.baseUri, {
        method: 'DELETE',
        path: `/assortment/${id}/item`,
        accessToken: config.access_token,
        inputCodec: assortment_1.AddItemToAssortmentRequestC,
        outputCodec: assortment_1.AddItemToAssortmentResponseC,
        input: request,
    });
}
