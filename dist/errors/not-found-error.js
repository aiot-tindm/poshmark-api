"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = void 0;
const abstract_error_1 = require("./abstract-error");
/**
 * Represents a 404 Not Found error
 */
class NotFoundError extends abstract_error_1.AbstractError {
    constructor(message, resource) {
        super(message);
        this.name = 'NotFoundError';
        this.resource = resource;
    }
    toJSON() {
        return {
            ...super.toJSON(),
            resource: this.resource,
        };
    }
}
exports.NotFoundError = NotFoundError;
