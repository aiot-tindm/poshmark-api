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
exports.BatchCatalogOverridesRequestC = exports.CatalogOverrideC = exports.CatalogResponseC = exports.BatchCatalogRequestC = exports.CreateCatalogRequestC = exports.CatalogItemC = void 0;
const t = __importStar(require("io-ts"));
const common_validation_1 = require("./common-validation");
/**
 * Catalog item
 */
exports.CatalogItemC = t.intersection([
    t.type({
        itemKey: common_validation_1.NonEmptyStringC,
        itemKeyType: common_validation_1.NonEmptyStringC,
    }),
    t.partial({
        dscoSupplierId: t.number,
        tradingPartnerId: t.string,
        title: t.string,
        description: t.string,
        brand: t.string,
        category: t.string,
        price: t.number,
        images: t.array(t.string),
        attributes: t.record(t.string, t.unknown),
    }),
]);
/**
 * Create catalog request
 */
exports.CreateCatalogRequestC = t.type({
    items: t.array(exports.CatalogItemC),
});
/**
 * Batch catalog request
 */
exports.BatchCatalogRequestC = t.type({
    items: t.array(exports.CatalogItemC),
});
/**
 * Catalog response
 */
exports.CatalogResponseC = t.type({
    success: t.boolean,
});
/**
 * Catalog override item
 */
exports.CatalogOverrideC = t.intersection([
    t.type({
        itemKey: common_validation_1.NonEmptyStringC,
    }),
    t.partial({
        price: t.number,
        inventory: t.number,
        attributes: t.record(t.string, t.unknown),
    }),
]);
/**
 * Batch catalog overrides request
 */
exports.BatchCatalogOverridesRequestC = t.type({
    overrides: t.array(exports.CatalogOverrideC),
});
