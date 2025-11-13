"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publishRequest = publishRequest;
const publish_api_request_1 = require("./publish-api-request");
const validator_1 = require("../util/validator");
/**
 * Publish a request with input/output validation
 */
async function publishRequest(baseUri, options) {
    const { inputCodec, outputCodec, input, ...apiOptions } = options;
    // Validate input if codec provided
    let validatedInput;
    if (inputCodec && input !== undefined) {
        validatedInput = (0, validator_1.validate)(inputCodec, input, 'Input validation failed');
    }
    // Make API request
    const response = await (0, publish_api_request_1.publishApiRequest)(baseUri, {
        ...apiOptions,
        body: validatedInput || input,
    });
    // Validate output
    const validatedOutput = (0, validator_1.validate)(outputCodec, response, 'Output validation failed');
    return validatedOutput;
}
