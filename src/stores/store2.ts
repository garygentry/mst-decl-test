import { types as t, TypeFlags } from 'mobx-state-tree';
import { Store3 } from './store3';

export const Store2 = t
    .model('Store2', {
        store3: t.array(Store3)
    });
