"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_state_tree_1 = require("mobx-state-tree");
var store2_1 = require("./store2");
exports.Store1 = mobx_state_tree_1.types
    .model('Store1', {
    store2: mobx_state_tree_1.types.optional(mobx_state_tree_1.types.array(store2_1.Store2), [])
    //store2: t.array(Store2)
});
//# sourceMappingURL=store1.js.map