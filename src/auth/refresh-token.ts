import {getToken} from './get-token';
import {isExpired} from '../util/time';
import {BaseDscoConfig, StoredToken} from '../validators/auth';

/**
 * Refresh access token if expired or about to expire
 *
 * @param config - Base configuration with client credentials
 * @param currentToken - Current token (if any)
 * @param bufferSeconds - Refresh token this many seconds before expiration (default: 60)
 * @returns New token if refreshed, or current token if still valid
 */
export async function refreshToken(
  config: BaseDscoConfig,
  currentToken?: StoredToken,
  bufferSeconds = 60
): Promise<StoredToken> {
  // If no current token or token is expired/about to expire, get new token
  if (!currentToken || isExpired(currentToken.expires_at, bufferSeconds)) {
    return getToken(config);
  }

  // Token is still valid
  return currentToken;
}
