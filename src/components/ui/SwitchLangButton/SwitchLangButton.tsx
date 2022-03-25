import React from 'react';
import { LANG } from 'types';
import { useStore } from '@hooks/useStore';
import { useController } from '@hooks/useController';

const SwitchLangButton = () => {
    const { locale, lang } = useStore();
    const { switchLang } = useController();

    const clickHandler = () => {
        switchLang(lang === LANG.EN ? LANG.RU : LANG.EN);
    };

    return <button onClick={clickHandler}>{locale['switch-lang']}</button>;
};

export default SwitchLangButton;
