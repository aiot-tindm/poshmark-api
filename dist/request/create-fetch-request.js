"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFetchRequest = createFetchRequest;
const node_fetch_1 = __importDefault(require("node-fetch"));
const errors_1 = require("../errors");
/**
 * Create and execute a fetch request with error handling
 */
async function createFetchRequest(url, options) {
    try {
        const response = await (0, node_fetch_1.default)(url, options);
        return response;
    }
    catch (error) {
        throw new errors_1.TransportError(`Network request failed: ${error instanceof Error ? error.message : 'Unknown error'}`, error instanceof Error ? error : undefined);
    }
}
