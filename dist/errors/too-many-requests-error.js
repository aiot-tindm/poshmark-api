"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TooManyRequestsError = void 0;
const abstract_error_1 = require("./abstract-error");
/**
 * Represents a 429 Too Many Requests error (rate limiting)
 */
class TooManyRequestsError extends abstract_error_1.AbstractError {
    constructor(message, retryAfter) {
        super(message);
        this.name = 'TooManyRequestsError';
        this.retryAfter = retryAfter;
    }
    toJSON() {
        return {
            ...super.toJSON(),
            retryAfter: this.retryAfter,
        };
    }
}
exports.TooManyRequestsError = TooManyRequestsError;
