import { createFetchRequest } from '../request/create-fetch-request';
import { createEndpointUri } from '../request/create-endpoint-uri';
import { validate } from '../util/validator';
import { getCurrentTimestamp } from '../util/time';
import {
  BaseDscoConfig,
  BaseDscoConfigC,
  OAuth2TokenResponse,
  OAuth2TokenResponseC,
  StoredToken,
} from '../validators/auth';
import { AuthError } from '../errors';

/**
 * Get OAuth2 access token from DSCO API
 *
 * @see https://api.dsco.io/api/v3/oauth2/token
 *
 * @param config - Base configuration with client credentials
 * @returns Token information including access token and expiration
 */
export async function getToken(config: BaseDscoConfig): Promise<StoredToken> {
  // Validate config
  const validatedConfig = validate(BaseDscoConfigC, config, 'Invalid configuration');

  const { baseUri, client_id, client_secret } = validatedConfig;

  // Build URL
  const url = createEndpointUri(baseUri, '/oauth2/token');

  // Build form-encoded body
  const body = new URLSearchParams({
    grant_type: 'client_credentials',
    client_id,
    client_secret,
  });

  // Make request
  const response = await createFetchRequest(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: body.toString(),
  });

  // Handle response
  if (!response.ok) {
    const errorText = await response.text();
    throw new AuthError(
      `Failed to get access token: ${response.status} ${response.statusText} - ${errorText}`,
    );
  }

  let responseData: unknown;
  try {
    responseData = await response.json();
  } catch (error) {
    throw new AuthError('Failed to parse token response as JSON');
  }

  // Validate response
  const tokenResponse = validate(
    OAuth2TokenResponseC,
    responseData,
    'Invalid token response',
  ) as OAuth2TokenResponse;

  // Calculate expiration timestamp
  const now = getCurrentTimestamp();
  const expiresAt = now + tokenResponse.expires_in;

  return {
    access_token: tokenResponse.access_token,
    expires_at: expiresAt,
  };
}
