"use strict";
/**
 * Object utility functions
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepClone = deepClone;
exports.removeUndefined = removeUndefined;
exports.isEmpty = isEmpty;
exports.pick = pick;
exports.omit = omit;
/**
 * Deep clone an object
 */
function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    if (obj instanceof Date) {
        return new Date(obj.getTime());
    }
    if (obj instanceof Array) {
        return obj.map((item) => deepClone(item));
    }
    if (obj instanceof Object) {
        const clonedObj = {};
        for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                clonedObj[key] = deepClone(obj[key]);
            }
        }
        return clonedObj;
    }
    return obj;
}
/**
 * Remove undefined values from an object
 */
function removeUndefined(obj) {
    const result = {};
    Object.entries(obj).forEach(([key, value]) => {
        if (value !== undefined) {
            result[key] = value;
        }
    });
    return result;
}
/**
 * Check if an object is empty
 */
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}
/**
 * Pick specific keys from an object
 */
function pick(obj, keys) {
    const result = {};
    keys.forEach((key) => {
        if (key in obj) {
            result[key] = obj[key];
        }
    });
    return result;
}
/**
 * Omit specific keys from an object
 */
function omit(obj, keys) {
    const result = { ...obj };
    keys.forEach((key) => {
        delete result[key];
    });
    return result;
}
