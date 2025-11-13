"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InconsistentDataError = void 0;
const abstract_error_1 = require("./abstract-error");
/**
 * Represents an error when data is inconsistent or unexpected
 */
class InconsistentDataError extends abstract_error_1.AbstractError {
    constructor(message, data) {
        super(message);
        this.name = 'InconsistentDataError';
        this.data = data;
    }
    toJSON() {
        return {
            ...super.toJSON(),
            data: this.data,
        };
    }
}
exports.InconsistentDataError = InconsistentDataError;
