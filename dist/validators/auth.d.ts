import * as t from 'io-ts';
/**
 * Base DSCO configuration
 */
export declare const BaseDscoConfigC: t.TypeC<{
    baseUri: t.RefinementC<t.StringC, string>;
    client_id: t.RefinementC<t.StringC, string>;
    client_secret: t.RefinementC<t.StringC, string>;
}>;
export type BaseDscoConfig = t.TypeOf<typeof BaseDscoConfigC>;
/**
 * DSCO request configuration (includes access token)
 */
export declare const DscoRequestConfigC: t.IntersectionC<[t.TypeC<{
    baseUri: t.RefinementC<t.StringC, string>;
    client_id: t.RefinementC<t.StringC, string>;
    client_secret: t.RefinementC<t.StringC, string>;
}>, t.TypeC<{
    access_token: t.RefinementC<t.StringC, string>;
}>]>;
export type DscoRequestConfig = t.TypeOf<typeof DscoRequestConfigC>;
/**
 * OAuth2 token request
 */
export declare const OAuth2TokenRequestC: t.TypeC<{
    grant_type: t.LiteralC<"client_credentials">;
    client_id: t.RefinementC<t.StringC, string>;
    client_secret: t.RefinementC<t.StringC, string>;
}>;
export type OAuth2TokenRequest = t.TypeOf<typeof OAuth2TokenRequestC>;
/**
 * OAuth2 token response
 */
export declare const OAuth2TokenResponseC: t.TypeC<{
    access_token: t.RefinementC<t.StringC, string>;
    token_type: t.StringC;
    expires_in: t.NumberC;
}>;
export type OAuth2TokenResponse = t.TypeOf<typeof OAuth2TokenResponseC>;
/**
 * Stored token information
 */
export declare const StoredTokenC: t.TypeC<{
    access_token: t.RefinementC<t.StringC, string>;
    expires_at: t.NumberC;
}>;
export type StoredToken = t.TypeOf<typeof StoredTokenC>;
