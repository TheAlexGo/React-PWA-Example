import packageRu from '@languages/ru';
import packageEn from '@languages/en';
import { LANG } from 'types';

export class LanguageService {
    private resources = {
        [LANG.RU]: packageRu,
        [LANG.EN]: packageEn
    };

    loadResource(lang: LANG) {
        return this.resources[lang];
    }
}
