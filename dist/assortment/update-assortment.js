"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAssortment = updateAssortment;
const publish_request_1 = require("../request/publish-request");
const assortment_1 = require("../validators/assortment");
/**
 * Update (rename) an assortment
 *
 * @see https://api.dsco.io/api/v3/assortment/{id}
 *
 * @param config - Request configuration with access token
 * @param id - The assortment ID
 * @param assortment - Updated assortment data
 * @returns Success response
 */
async function updateAssortment(config, id, assortment) {
    return (0, publish_request_1.publishRequest)(config.baseUri, {
        method: 'PUT',
        path: `/assortment/${id}`,
        accessToken: config.access_token,
        inputCodec: assortment_1.AssortmentC,
        outputCodec: assortment_1.SuccessFailResponseC,
        input: assortment,
    });
}
