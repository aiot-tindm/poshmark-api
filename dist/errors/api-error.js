"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiError = void 0;
const abstract_error_1 = require("./abstract-error");
/**
 * Represents an error response from the DSCO API
 */
class ApiError extends abstract_error_1.AbstractError {
    constructor(message, statusCode, response) {
        super(message);
        this.name = 'ApiError';
        this.statusCode = statusCode;
        this.response = response;
    }
    toJSON() {
        return {
            ...super.toJSON(),
            statusCode: this.statusCode,
            response: this.response,
        };
    }
}
exports.ApiError = ApiError;
