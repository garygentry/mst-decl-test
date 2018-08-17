import { types as t, TypeFlags } from 'mobx-state-tree';
import { Store5 } from './store5';

export const Store4 = t
    .model('Store4', {
        store5: Store5
    });
