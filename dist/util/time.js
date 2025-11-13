"use strict";
/**
 * Time utility functions
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentTimestamp = getCurrentTimestamp;
exports.getCurrentTimestampMs = getCurrentTimestampMs;
exports.secondsToMs = secondsToMs;
exports.msToSeconds = msToSeconds;
exports.sleep = sleep;
exports.isExpired = isExpired;
/**
 * Get current Unix timestamp in seconds
 */
function getCurrentTimestamp() {
    return Math.floor(Date.now() / 1000);
}
/**
 * Get current Unix timestamp in milliseconds
 */
function getCurrentTimestampMs() {
    return Date.now();
}
/**
 * Convert seconds to milliseconds
 */
function secondsToMs(seconds) {
    return seconds * 1000;
}
/**
 * Convert milliseconds to seconds
 */
function msToSeconds(ms) {
    return Math.floor(ms / 1000);
}
/**
 * Sleep for a specified number of milliseconds
 */
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
/**
 * Check if a timestamp has expired
 */
function isExpired(expiresAt, bufferSeconds = 60) {
    const now = getCurrentTimestamp();
    return now >= expiresAt - bufferSeconds;
}
