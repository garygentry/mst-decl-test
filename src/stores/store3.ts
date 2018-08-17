import { types as t, TypeFlags } from 'mobx-state-tree';
import { Store4 } from './store4';
import { Store5 } from './store5';

export const Store3 = t
    .model('Store3', {
        store4: Store4,
        store5: t.optional(Store5, {})
    });
