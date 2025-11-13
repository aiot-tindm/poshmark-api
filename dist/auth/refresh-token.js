"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshToken = refreshToken;
const get_token_1 = require("./get-token");
const time_1 = require("../util/time");
/**
 * Refresh access token if expired or about to expire
 *
 * @param config - Base configuration with client credentials
 * @param currentToken - Current token (if any)
 * @param bufferSeconds - Refresh token this many seconds before expiration (default: 60)
 * @returns New token if refreshed, or current token if still valid
 */
async function refreshToken(config, currentToken, bufferSeconds = 60) {
    // If no current token or token is expired/about to expire, get new token
    if (!currentToken || (0, time_1.isExpired)(currentToken.expires_at, bufferSeconds)) {
        return (0, get_token_1.getToken)(config);
    }
    // Token is still valid
    return currentToken;
}
