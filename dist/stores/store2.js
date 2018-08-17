"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_state_tree_1 = require("mobx-state-tree");
var store3_1 = require("./store3");
exports.Store2 = mobx_state_tree_1.types
    .model('Store2', {
    store3: mobx_state_tree_1.types.array(store3_1.Store3)
});
//# sourceMappingURL=store2.js.map