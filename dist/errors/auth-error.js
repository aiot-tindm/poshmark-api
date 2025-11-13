"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthError = void 0;
const abstract_error_1 = require("./abstract-error");
/**
 * Represents an authentication/authorization error
 */
class AuthError extends abstract_error_1.AbstractError {
    constructor(message) {
        super(message);
        this.name = 'AuthError';
    }
}
exports.AuthError = AuthError;
