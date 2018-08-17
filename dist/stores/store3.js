"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_state_tree_1 = require("mobx-state-tree");
var store4_1 = require("./store4");
var store5_1 = require("./store5");
exports.Store3 = mobx_state_tree_1.types
    .model('Store3', {
    store4: store4_1.Store4,
    store5: mobx_state_tree_1.types.optional(store5_1.Store5, {})
});
//# sourceMappingURL=store3.js.map