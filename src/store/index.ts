import { action, makeAutoObservable } from 'mobx';
import { createContext } from 'react';

export class Store {
    counter = 0;

    constructor() {
        makeAutoObservable(this);
    }

    @action
    setCounter = (counter: number) => {
        this.counter = counter;
    };
}

export const store = new Store();

export const StoreContext = createContext<Store>(store);
