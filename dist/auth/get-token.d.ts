import { BaseDscoConfig, StoredToken } from '../validators/auth';
/**
 * Get OAuth2 access token from DSCO API
 *
 * @see https://api.dsco.io/api/v3/oauth2/token
 *
 * @param config - Base configuration with client credentials
 * @returns Token information including access token and expiration
 */
export declare function getToken(config: BaseDscoConfig): Promise<StoredToken>;
