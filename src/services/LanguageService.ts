import packageRu from '@languages/ru.json';
import packageEn from '@languages/en.json';
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
