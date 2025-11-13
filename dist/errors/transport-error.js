"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransportError = void 0;
const abstract_error_1 = require("./abstract-error");
/**
 * Represents a network/transport error
 */
class TransportError extends abstract_error_1.AbstractError {
    constructor(message, cause) {
        super(message);
        this.name = 'TransportError';
        this.cause = cause;
    }
    toJSON() {
        return {
            ...super.toJSON(),
            cause: this.cause?.message,
        };
    }
}
exports.TransportError = TransportError;
