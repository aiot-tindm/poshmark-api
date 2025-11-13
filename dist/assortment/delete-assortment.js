"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAssortment = deleteAssortment;
const publish_request_1 = require("../request/publish-request");
const common_validation_1 = require("../validators/common-validation");
/**
 * Delete an assortment (removes all items from the assortment)
 *
 * @see https://api.dsco.io/api/v3/assortment/{id}
 *
 * @param config - Request configuration with access token
 * @param id - The assortment ID
 * @returns Success response
 */
async function deleteAssortment(config, id) {
    return (0, publish_request_1.publishRequest)(config.baseUri, {
        method: 'DELETE',
        path: `/assortment/${id}`,
        accessToken: config.access_token,
        outputCodec: common_validation_1.SuccessFailResponseC,
    });
}
