"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEndpointUri = createEndpointUri;
const url_1 = require("../util/url");
/**
 * Create a full endpoint URI from base URL and path
 */
function createEndpointUri(baseUri, path) {
    return (0, url_1.buildUrl)(baseUri, path);
}
