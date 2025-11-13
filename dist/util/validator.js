"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = validate;
exports.isValid = isValid;
exports.safeValidate = safeValidate;
const PathReporter_1 = require("io-ts/PathReporter");
const Either_1 = require("fp-ts/Either");
const errors_1 = require("../errors");
/**
 * Validate data against an io-ts codec
 * @throws {ValidationError} If validation fails
 */
function validate(codec, data, errorPrefix = 'Validation failed') {
    const result = codec.decode(data);
    if ((0, Either_1.isRight)(result)) {
        return result.right;
    }
    const errors = PathReporter_1.PathReporter.report(result);
    throw new errors_1.ValidationError(`${errorPrefix}: ${errors.join(', ')}`, errors);
}
/**
 * Check if data is valid according to a codec
 */
function isValid(codec, data) {
    const result = codec.decode(data);
    return (0, Either_1.isRight)(result);
}
/**
 * Safely validate without throwing
 */
function safeValidate(codec, data) {
    const result = codec.decode(data);
    if ((0, Either_1.isRight)(result)) {
        return { success: true, data: result.right };
    }
    return { success: false, errors: PathReporter_1.PathReporter.report(result) };
}
