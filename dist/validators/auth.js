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
exports.StoredTokenC = exports.OAuth2TokenResponseC = exports.OAuth2TokenRequestC = exports.DscoRequestConfigC = exports.BaseDscoConfigC = void 0;
const t = __importStar(require("io-ts"));
const common_validation_1 = require("./common-validation");
/**
 * Base DSCO configuration
 */
exports.BaseDscoConfigC = t.type({
    baseUri: common_validation_1.BaseUriC,
    client_id: common_validation_1.NonEmptyStringC,
    client_secret: common_validation_1.NonEmptyStringC,
});
/**
 * DSCO request configuration (includes access token)
 */
exports.DscoRequestConfigC = t.intersection([
    exports.BaseDscoConfigC,
    t.type({
        access_token: common_validation_1.NonEmptyStringC,
    }),
]);
/**
 * OAuth2 token request
 */
exports.OAuth2TokenRequestC = t.type({
    grant_type: t.literal('client_credentials'),
    client_id: common_validation_1.NonEmptyStringC,
    client_secret: common_validation_1.NonEmptyStringC,
});
/**
 * OAuth2 token response
 */
exports.OAuth2TokenResponseC = t.type({
    access_token: common_validation_1.NonEmptyStringC,
    token_type: t.string,
    expires_in: t.number,
});
/**
 * Stored token information
 */
exports.StoredTokenC = t.type({
    access_token: common_validation_1.NonEmptyStringC,
    expires_at: t.number, // Unix timestamp in seconds
});
