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
exports.IdResponseC = exports.MessageResponseC = exports.AsyncUpdateResponseC = exports.IdParamC = exports.SuccessFailResponseC = exports.DateRangeC = exports.SortOrderC = exports.PaginationC = exports.IsoDateStringC = exports.TimestampC = exports.BaseUriC = exports.NonNegativeNumberC = exports.PositiveNumberC = exports.NonEmptyStringC = void 0;
const t = __importStar(require("io-ts"));
/**
 * Common validation codecs used across the API
 */
/**
 * Non-empty string codec
 */
exports.NonEmptyStringC = t.refinement(t.string, (s) => s.length > 0, 'NonEmptyString');
/**
 * Positive number codec
 */
exports.PositiveNumberC = t.refinement(t.number, (n) => n > 0, 'PositiveNumber');
/**
 * Non-negative number codec
 */
exports.NonNegativeNumberC = t.refinement(t.number, (n) => n >= 0, 'NonNegativeNumber');
/**
 * Base URI codec
 */
exports.BaseUriC = t.refinement(t.string, (s) => s.startsWith('http://') || s.startsWith('https://'), 'BaseUri');
/**
 * Timestamp codec (Unix timestamp in seconds)
 */
exports.TimestampC = t.refinement(t.number, (n) => n > 0, 'Timestamp');
/**
 * ISO Date string codec
 */
exports.IsoDateStringC = t.refinement(t.string, (s) => !isNaN(Date.parse(s)), 'IsoDateString');
/**
 * Pagination codec
 */
exports.PaginationC = t.partial({
    page: exports.PositiveNumberC,
    limit: exports.PositiveNumberC,
    offset: exports.NonNegativeNumberC,
});
/**
 * Sort order codec
 */
exports.SortOrderC = t.union([t.literal('asc'), t.literal('desc')]);
/**
 * Date range codec
 */
exports.DateRangeC = t.partial({
    startDate: exports.IsoDateStringC,
    endDate: exports.IsoDateStringC,
});
/**
 * Success/Fail response codec
 */
exports.SuccessFailResponseC = t.type({
    success: t.boolean,
});
/**
 * ID parameter codec
 */
exports.IdParamC = t.union([t.string, t.number]);
/**
 * Async update response codec
 */
exports.AsyncUpdateResponseC = t.type({
    status: t.union([t.literal('success'), t.literal('failure'), t.literal('pending')]),
    requestId: t.string,
    eventDate: t.string,
});
/**
 * Generic message response
 */
exports.MessageResponseC = t.type({
    message: t.string,
});
/**
 * Generic ID response
 */
exports.IdResponseC = t.type({
    id: t.string,
});
