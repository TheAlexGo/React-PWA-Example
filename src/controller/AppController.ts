import { createContext } from 'react';

import { store, Store } from '@store';
import { ApiService } from '@services/ApiService';
import { LanguageService } from '@services/LanguageService';
import { IApiCallback, LANG } from 'types';

export class AppController {
    store: Store;
    apiService: ApiService;
    langService: LanguageService;

    constructor(appStore: Store) {
        this.store = appStore;
        this.apiService = new ApiService(this.apiCallback);
        this.langService = new LanguageService();
    }

    apiCallback: IApiCallback = (method, result, data) => {
        console.log(method, result, data);
    };

    /**
     * Устанавливает язык ресурса
     */
    switchLang = (lang: LANG) => {
        this.store.setLang(lang);
        console.log('Установлен язык:', lang);
    };

    /**
     * Устанавливает текстовый ресурс
     */
    initResource = (lang: LANG) => {
        const resource = this.langService.loadResource(lang);
        this.store.setLocale(resource);
        console.log(`Ресурс ${lang} загружен:`, resource);
    };
}

export const appController = new AppController(store);
export const ControllerContext = createContext(appController);
