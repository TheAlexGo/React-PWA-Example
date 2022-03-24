import { createContext } from 'react';

import { store, Store } from '@store';
import { ApiService } from '@services/ApiService';
import { IApiCallback } from '../types';

export class AppController {
    store: Store;
    apiService: ApiService;

    constructor(appStore: Store) {
        this.store = appStore;
        this.apiService = new ApiService(this.apiCallback);
    }

    apiCallback: IApiCallback = (method, result, data) => {
        console.log(method, result, data);
    };

    /**
     * Получение текстовых данных
     */
    initLocale = () => {};
}

export const appController = new AppController(store);
export const ControllerContext = createContext(appController);
