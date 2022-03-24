import { store, Store } from '@store';
import { createContext } from 'react';

export class AppController {
    store: Store;

    constructor(appStore: Store) {
        this.store = appStore;
    }
}

export const appController = new AppController(store);
export const ControllerContext = createContext(appController);
