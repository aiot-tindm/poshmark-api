"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationError = void 0;
const abstract_error_1 = require("./abstract-error");
/**
 * Represents a validation error from io-ts
 */
class ValidationError extends abstract_error_1.AbstractError {
    constructor(message, errors) {
        super(message);
        this.name = 'ValidationError';
        this.errors = errors;
    }
    toJSON() {
        return {
            ...super.toJSON(),
            errors: this.errors,
        };
    }
}
exports.ValidationError = ValidationError;
