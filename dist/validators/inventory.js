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
exports.SkuHoldResponseC = exports.SkuHoldRequestC = exports.GetSingleInventoryItemResponseC = exports.InventoryResponseC = exports.UpdateInventoryRequestC = exports.InventoryItemC = void 0;
const t = __importStar(require("io-ts"));
const common_validation_1 = require("./common-validation");
/**
 * Inventory item
 */
exports.InventoryItemC = t.intersection([
    t.type({
        itemKey: common_validation_1.NonEmptyStringC,
        quantity: common_validation_1.NonNegativeNumberC,
    }),
    t.partial({
        dscoItemId: t.number,
        warehouseCode: t.string,
        availableDate: t.string,
    }),
]);
/**
 * Create/update inventory request
 */
exports.UpdateInventoryRequestC = t.type({
    items: t.array(exports.InventoryItemC),
});
/**
 * Inventory response
 */
exports.InventoryResponseC = t.type({
    success: t.boolean,
});
/**
 * Get single inventory item response
 */
exports.GetSingleInventoryItemResponseC = exports.InventoryItemC;
/**
 * SKU hold request
 */
exports.SkuHoldRequestC = t.type({
    itemKey: common_validation_1.NonEmptyStringC,
    quantity: common_validation_1.PositiveNumberC,
    holdDurationMinutes: common_validation_1.PositiveNumberC,
});
/**
 * SKU hold response
 */
exports.SkuHoldResponseC = t.type({
    success: t.boolean,
    holdId: t.string,
});
