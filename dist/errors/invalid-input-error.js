"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidInputError = void 0;
const abstract_error_1 = require("./abstract-error");
/**
 * Represents an error when input validation fails
 */
class InvalidInputError extends abstract_error_1.AbstractError {
    constructor(message, input) {
        super(message);
        this.name = 'InvalidInputError';
        this.input = input;
    }
    toJSON() {
        return {
            ...super.toJSON(),
            input: this.input,
        };
    }
}
exports.InvalidInputError = InvalidInputError;
