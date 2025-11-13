import * as t from 'io-ts';
import {BaseUriC, NonEmptyStringC} from './common-validation';

/**
 * Base DSCO configuration
 */
export const BaseDscoConfigC = t.type({
  baseUri: BaseUriC,
  client_id: NonEmptyStringC,
  client_secret: NonEmptyStringC,
});

export type BaseDscoConfig = t.TypeOf<typeof BaseDscoConfigC>;

/**
 * DSCO request configuration (includes access token)
 */
export const DscoRequestConfigC = t.intersection([
  BaseDscoConfigC,
  t.type({
    access_token: NonEmptyStringC,
  }),
]);

export type DscoRequestConfig = t.TypeOf<typeof DscoRequestConfigC>;

/**
 * OAuth2 token request
 */
export const OAuth2TokenRequestC = t.type({
  grant_type: t.literal('client_credentials'),
  client_id: NonEmptyStringC,
  client_secret: NonEmptyStringC,
});

export type OAuth2TokenRequest = t.TypeOf<typeof OAuth2TokenRequestC>;

/**
 * OAuth2 token response
 */
export const OAuth2TokenResponseC = t.type({
  access_token: NonEmptyStringC,
  token_type: t.string,
  expires_in: t.number,
});

export type OAuth2TokenResponse = t.TypeOf<typeof OAuth2TokenResponseC>;

/**
 * Stored token information
 */
export const StoredTokenC = t.type({
  access_token: NonEmptyStringC,
  expires_at: t.number, // Unix timestamp in seconds
});

export type StoredToken = t.TypeOf<typeof StoredTokenC>;
