/**
 * dsco-api - TypeScript library for DSCO Platform API (v3) by Rithum
 *
 * This library provides a comprehensive TypeScript interface for interacting
 * with the DSCO Platform API for marketplace operations.
 *
 * @packageDocumentation
 */
export * from './auth';
export * from './assortment';
export * from './catalog';
export * from './orders';
export * from './inventory';
export * from './pricing';
export * from './marketplace';
export * from './returns';
export * from './warehouse';
export * from './shipping';
export * from './trading-partners';
export * from './conversation';
export * from './invoice';
export * from './utility';
export * from './errors';
export * from './validators';
export { concurrentRetryRequest, concurrentRetryRequests } from './util/concurrent-retry-request';
export { deepClone, removeUndefined, isEmpty, pick, omit } from './util/object';
export { getCurrentTimestamp, getCurrentTimestampMs, secondsToMs, msToSeconds, sleep, isExpired, } from './util/time';
export { validate, isValid, safeValidate } from './util/validator';
export { normalizeBaseUrl, buildUrl, buildUrlWithParams } from './util/url';
export { isDscoApiError, extractErrorMessage, type DscoApiError, } from './util/poshmark-api-error-validate';
