"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractError = void 0;
/**
 * Abstract base error class for all poshmark-api errors
 */
class AbstractError extends Error {
    constructor(message) {
        super(message);
        this.timestamp = new Date();
        Object.setPrototypeOf(this, new.target.prototype);
        Error.captureStackTrace(this, this.constructor);
    }
    /**
     * Returns a JSON representation of the error
     */
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            timestamp: this.timestamp.toISOString(),
            stack: this.stack,
        };
    }
}
exports.AbstractError = AbstractError;
