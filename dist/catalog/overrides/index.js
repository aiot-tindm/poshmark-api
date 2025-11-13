"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOverridesLog = exports.batchLargeOverrides = exports.batchSmallOverrides = void 0;
var batch_small_overrides_1 = require("./batch-small-overrides");
Object.defineProperty(exports, "batchSmallOverrides", { enumerable: true, get: function () { return batch_small_overrides_1.batchSmallOverrides; } });
var batch_large_overrides_1 = require("./batch-large-overrides");
Object.defineProperty(exports, "batchLargeOverrides", { enumerable: true, get: function () { return batch_large_overrides_1.batchLargeOverrides; } });
var get_overrides_log_1 = require("./get-overrides-log");
Object.defineProperty(exports, "getOverridesLog", { enumerable: true, get: function () { return get_overrides_log_1.getOverridesLog; } });
