"use strict";
/**
 * dsco-api - TypeScript library for DSCO Platform API (v3) by Rithum
 *
 * This library provides a comprehensive TypeScript interface for interacting
 * with the DSCO Platform API for marketplace operations.
 *
 * @packageDocumentation
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractErrorMessage = exports.isDscoApiError = exports.buildUrlWithParams = exports.buildUrl = exports.normalizeBaseUrl = exports.safeValidate = exports.isValid = exports.validate = exports.isExpired = exports.sleep = exports.msToSeconds = exports.secondsToMs = exports.getCurrentTimestampMs = exports.getCurrentTimestamp = exports.omit = exports.pick = exports.isEmpty = exports.removeUndefined = exports.deepClone = exports.concurrentRetryRequests = exports.concurrentRetryRequest = void 0;
// Authentication
__exportStar(require("./auth"), exports);
// API Modules
__exportStar(require("./assortment"), exports);
__exportStar(require("./catalog"), exports);
__exportStar(require("./orders"), exports);
__exportStar(require("./inventory"), exports);
__exportStar(require("./pricing"), exports);
__exportStar(require("./marketplace"), exports);
__exportStar(require("./returns"), exports);
__exportStar(require("./warehouse"), exports);
__exportStar(require("./shipping"), exports);
__exportStar(require("./trading-partners"), exports);
__exportStar(require("./conversation"), exports);
__exportStar(require("./invoice"), exports);
__exportStar(require("./utility"), exports);
// Error Handling
__exportStar(require("./errors"), exports);
// Validators and Types
__exportStar(require("./validators"), exports);
// Utilities
var concurrent_retry_request_1 = require("./util/concurrent-retry-request");
Object.defineProperty(exports, "concurrentRetryRequest", { enumerable: true, get: function () { return concurrent_retry_request_1.concurrentRetryRequest; } });
Object.defineProperty(exports, "concurrentRetryRequests", { enumerable: true, get: function () { return concurrent_retry_request_1.concurrentRetryRequests; } });
var object_1 = require("./util/object");
Object.defineProperty(exports, "deepClone", { enumerable: true, get: function () { return object_1.deepClone; } });
Object.defineProperty(exports, "removeUndefined", { enumerable: true, get: function () { return object_1.removeUndefined; } });
Object.defineProperty(exports, "isEmpty", { enumerable: true, get: function () { return object_1.isEmpty; } });
Object.defineProperty(exports, "pick", { enumerable: true, get: function () { return object_1.pick; } });
Object.defineProperty(exports, "omit", { enumerable: true, get: function () { return object_1.omit; } });
var time_1 = require("./util/time");
Object.defineProperty(exports, "getCurrentTimestamp", { enumerable: true, get: function () { return time_1.getCurrentTimestamp; } });
Object.defineProperty(exports, "getCurrentTimestampMs", { enumerable: true, get: function () { return time_1.getCurrentTimestampMs; } });
Object.defineProperty(exports, "secondsToMs", { enumerable: true, get: function () { return time_1.secondsToMs; } });
Object.defineProperty(exports, "msToSeconds", { enumerable: true, get: function () { return time_1.msToSeconds; } });
Object.defineProperty(exports, "sleep", { enumerable: true, get: function () { return time_1.sleep; } });
Object.defineProperty(exports, "isExpired", { enumerable: true, get: function () { return time_1.isExpired; } });
var validator_1 = require("./util/validator");
Object.defineProperty(exports, "validate", { enumerable: true, get: function () { return validator_1.validate; } });
Object.defineProperty(exports, "isValid", { enumerable: true, get: function () { return validator_1.isValid; } });
Object.defineProperty(exports, "safeValidate", { enumerable: true, get: function () { return validator_1.safeValidate; } });
var url_1 = require("./util/url");
Object.defineProperty(exports, "normalizeBaseUrl", { enumerable: true, get: function () { return url_1.normalizeBaseUrl; } });
Object.defineProperty(exports, "buildUrl", { enumerable: true, get: function () { return url_1.buildUrl; } });
Object.defineProperty(exports, "buildUrlWithParams", { enumerable: true, get: function () { return url_1.buildUrlWithParams; } });
var poshmark_api_error_validate_1 = require("./util/poshmark-api-error-validate");
Object.defineProperty(exports, "isDscoApiError", { enumerable: true, get: function () { return poshmark_api_error_validate_1.isDscoApiError; } });
Object.defineProperty(exports, "extractErrorMessage", { enumerable: true, get: function () { return poshmark_api_error_validate_1.extractErrorMessage; } });
