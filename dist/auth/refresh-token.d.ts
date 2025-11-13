import { BaseDscoConfig, StoredToken } from '../validators/auth';
/**
 * Refresh access token if expired or about to expire
 *
 * @param config - Base configuration with client credentials
 * @param currentToken - Current token (if any)
 * @param bufferSeconds - Refresh token this many seconds before expiration (default: 60)
 * @returns New token if refreshed, or current token if still valid
 */
export declare function refreshToken(config: BaseDscoConfig, currentToken?: StoredToken, bufferSeconds?: number): Promise<StoredToken>;
