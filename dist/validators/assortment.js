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
exports.SuccessFailResponseC = exports.AddItemToAssortmentResponseC = exports.AddItemToAssortmentRequestC = exports.ItemKeyObjC = exports.ItemKeyTypeC = exports.CreateAssortmentResponseC = exports.CreateAssortmentRequestC = exports.AssortmentC = void 0;
const t = __importStar(require("io-ts"));
const common_validation_1 = require("./common-validation");
Object.defineProperty(exports, "SuccessFailResponseC", { enumerable: true, get: function () { return common_validation_1.SuccessFailResponseC; } });
/**
 * Assortment object
 */
exports.AssortmentC = t.intersection([
    t.type({
        name: common_validation_1.NonEmptyStringC,
    }),
    t.partial({
        id: t.string,
    }),
]);
/**
 * Create assortment request
 */
exports.CreateAssortmentRequestC = t.type({
    name: common_validation_1.NonEmptyStringC,
});
/**
 * Create assortment response
 */
exports.CreateAssortmentResponseC = t.type({
    id: t.string,
    name: common_validation_1.NonEmptyStringC,
});
/**
 * Item key type
 */
exports.ItemKeyTypeC = t.union([
    t.literal('SKU'),
    t.literal('UPC'),
    t.literal('EAN'),
    t.literal('MPN'),
    t.literal('ISBN'),
    t.literal('GTIN'),
]);
/**
 * Item key object
 */
exports.ItemKeyObjC = t.intersection([
    t.type({
        itemKey: common_validation_1.NonEmptyStringC,
        itemKeyType: exports.ItemKeyTypeC,
    }),
    t.partial({
        dscoSupplierId: t.number,
        tradingPartnerId: t.string,
    }),
]);
/**
 * Add item to assortment request
 */
exports.AddItemToAssortmentRequestC = t.partial({
    dscoItemId: t.number,
    itemKey: exports.ItemKeyObjC,
});
/**
 * Add item to assortment response
 */
exports.AddItemToAssortmentResponseC = common_validation_1.SuccessFailResponseC;
