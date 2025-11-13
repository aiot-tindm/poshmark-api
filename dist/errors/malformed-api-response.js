"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MalformedApiResponse = void 0;
const abstract_error_1 = require("./abstract-error");
/**
 * Represents an error when API response is malformed or doesn't match expected schema
 */
class MalformedApiResponse extends abstract_error_1.AbstractError {
    constructor(message, response, validationErrors) {
        super(message);
        this.name = 'MalformedApiResponse';
        this.response = response;
        this.validationErrors = validationErrors;
    }
    toJSON() {
        return {
            ...super.toJSON(),
            response: this.response,
            validationErrors: this.validationErrors,
        };
    }
}
exports.MalformedApiResponse = MalformedApiResponse;
