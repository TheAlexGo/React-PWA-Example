import { createContext } from 'react';
import { action, makeAutoObservable } from 'mobx';

import { LANG } from 'types';

export class Store {
    lang = LANG.RU;

    locale: Record<string, string> = {};

    constructor() {
        makeAutoObservable(this);
    }

    @action
    setLang(lang: LANG) {
        this.lang = lang;
    }

    @action
    setLocale(locale: Record<string, string>) {
        this.locale = locale;
    }
}

export const store = new Store();

export const StoreContext = createContext<Store>(store);
