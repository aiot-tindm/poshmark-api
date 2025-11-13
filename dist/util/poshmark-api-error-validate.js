"use strict";
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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.DscoApiErrorC = void 0;
exports.isDscoApiError = isDscoApiError;
exports.extractErrorMessage = extractErrorMessage;
const t = __importStar(require("io-ts"));
/**
 * DSCO API error response codec
 */
exports.DscoApiErrorC = t.partial({
    error: t.string,
    error_description: t.string,
    message: t.string,
    status: t.union([t.number, t.string]),
    statusCode: t.number,
    code: t.string,
    details: t.unknown,
});
/**
 * Check if response is an error response
 */
function isDscoApiError(data) {
    if (typeof data !== 'object' || data === null) {
        return false;
    }
    const obj = data;
    return ('error' in obj ||
        'error_description' in obj ||
        ('message' in obj && 'statusCode' in obj) ||
        ('message' in obj && 'status' in obj));
}
/**
 * Extract error message from DSCO API error response
 */
function extractErrorMessage(error) {
    if (typeof error === 'string') {
        return error;
    }
    if (typeof error === 'object' && error !== null) {
        const obj = error;
        if (typeof obj.error_description === 'string') {
            return obj.error_description;
        }
        if (typeof obj.error === 'string') {
            return obj.error;
        }
        if (typeof obj.message === 'string') {
            return obj.message;
        }
        if (typeof obj.details === 'string') {
            return obj.details;
        }
    }
    return 'Unknown error';
}
