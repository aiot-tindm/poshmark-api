"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getToken = getToken;
const create_fetch_request_1 = require("../request/create-fetch-request");
const create_endpoint_uri_1 = require("../request/create-endpoint-uri");
const validator_1 = require("../util/validator");
const time_1 = require("../util/time");
const auth_1 = require("../validators/auth");
const errors_1 = require("../errors");
/**
 * Get OAuth2 access token from DSCO API
 *
 * @see https://api.dsco.io/api/v3/oauth2/token
 *
 * @param config - Base configuration with client credentials
 * @returns Token information including access token and expiration
 */
async function getToken(config) {
    // Validate config
    const validatedConfig = (0, validator_1.validate)(auth_1.BaseDscoConfigC, config, 'Invalid configuration');
    const { baseUri, client_id, client_secret } = validatedConfig;
    // Build URL
    const url = (0, create_endpoint_uri_1.createEndpointUri)(baseUri, '/oauth2/token');
    // Build form-encoded body
    const body = new URLSearchParams({
        grant_type: 'client_credentials',
        client_id,
        client_secret,
    });
    // Make request
    const response = await (0, create_fetch_request_1.createFetchRequest)(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: body.toString(),
    });
    // Handle response
    if (!response.ok) {
        const errorText = await response.text();
        throw new errors_1.AuthError(`Failed to get access token: ${response.status} ${response.statusText} - ${errorText}`);
    }
    let responseData;
    try {
        responseData = await response.json();
    }
    catch (error) {
        throw new errors_1.AuthError('Failed to parse token response as JSON');
    }
    // Validate response
    const tokenResponse = (0, validator_1.validate)(auth_1.OAuth2TokenResponseC, responseData, 'Invalid token response');
    // Calculate expiration timestamp
    const now = (0, time_1.getCurrentTimestamp)();
    const expiresAt = now + tokenResponse.expires_in;
    return {
        access_token: tokenResponse.access_token,
        expires_at: expiresAt,
    };
}
