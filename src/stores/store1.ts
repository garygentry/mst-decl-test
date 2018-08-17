import { types as t, TypeFlags } from 'mobx-state-tree';
import { Store2 } from './store2';

export const Store1 = t
    .model('Store1', {
        store2: t.optional(t.array(Store2), [])
        //store2: t.array(Store2)
    });
