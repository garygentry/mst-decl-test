import { types as t, TypeFlags } from 'mobx-state-tree';

export const Store5 = t
    .model('Store5', {
        prop1: t.maybe(t.string)
    });
