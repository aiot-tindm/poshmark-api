"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStream = getStream;
exports.getStreamPartitionPosition = getStreamPartitionPosition;
exports.getStreamPartitionRange = getStreamPartitionRange;
exports.getSingleStreamPartitionPosition = getSingleStreamPartitionPosition;
const publish_request_1 = require("../request/publish-request");
const t = __importStar(require("io-ts"));
/**
 * Get stream by ID
 *
 * @see https://api.dsco.io/api/v3/stream/{id}
 *
 * @param config - Request configuration with access token
 * @param id - Stream ID
 * @param params - Optional query parameters
 * @returns Stream data
 */
async function getStream(config, id, params) {
    return (0, publish_request_1.publishRequest)(config.baseUri, {
        method: 'GET',
        path: `/stream/${id}`,
        accessToken: config.access_token,
        outputCodec: t.unknown,
        queryParams: params,
    });
}
/**
 * Get stream partition position
 *
 * @see https://api.dsco.io/api/v3/stream/{id}/{partitionId}/{position}
 *
 * @param config - Request configuration with access token
 * @param id - Stream ID
 * @param partitionId - Partition ID
 * @param position - Position
 * @returns Stream partition data
 */
async function getStreamPartitionPosition(config, id, partitionId, position) {
    return (0, publish_request_1.publishRequest)(config.baseUri, {
        method: 'GET',
        path: `/stream/${id}/${partitionId}/${position}`,
        accessToken: config.access_token,
        outputCodec: t.unknown,
    });
}
/**
 * Get stream partition range
 *
 * @see https://api.dsco.io/api/v3/stream/{id}/{partitionId}/{startPosition}/{endPosition}
 *
 * @param config - Request configuration with access token
 * @param id - Stream ID
 * @param partitionId - Partition ID
 * @param startPosition - Start position
 * @param endPosition - End position
 * @returns Stream partition range data
 */
async function getStreamPartitionRange(config, id, partitionId, startPosition, endPosition) {
    return (0, publish_request_1.publishRequest)(config.baseUri, {
        method: 'GET',
        path: `/stream/${id}/${partitionId}/${startPosition}/${endPosition}`,
        accessToken: config.access_token,
        outputCodec: t.unknown,
    });
}
/**
 * Get single stream partition position
 *
 * @see https://api.dsco.io/api/v3/stream/single/{id}/{partitionId}/{position}
 *
 * @param config - Request configuration with access token
 * @param id - Stream ID
 * @param partitionId - Partition ID
 * @param position - Position
 * @returns Single stream partition data
 */
async function getSingleStreamPartitionPosition(config, id, partitionId, position) {
    return (0, publish_request_1.publishRequest)(config.baseUri, {
        method: 'GET',
        path: `/stream/single/${id}/${partitionId}/${position}`,
        accessToken: config.access_token,
        outputCodec: t.unknown,
    });
}
