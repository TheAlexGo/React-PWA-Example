export enum LANG {
    RU = 'ru-RU',
    EN = 'en-EN'
}

export interface IApi {
    getManga: (value: string) => void;
}

export type IApiCallbackResult = 'ok' | 'cancel';
export type IApiMethod = keyof IApi;

export type IApiCallback<T = string> = (method: IApiMethod, result: IApiCallbackResult, data: T) => void;
