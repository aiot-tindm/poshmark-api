"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAssortment = getAssortment;
const publish_request_1 = require("../request/publish-request");
const assortment_1 = require("../validators/assortment");
/**
 * Get a single assortment by ID
 *
 * @see https://api.dsco.io/api/v3/assortment/{id}
 *
 * @param config - Request configuration with access token
 * @param id - The assortment ID
 * @returns Assortment data
 */
async function getAssortment(config, id) {
    return (0, publish_request_1.publishRequest)(config.baseUri, {
        method: 'GET',
        path: `/assortment/${id}`,
        accessToken: config.access_token,
        outputCodec: assortment_1.AssortmentC,
    });
}
