import React, { FC } from 'react';

import { useStore } from '@hooks/useStore';
import { useController } from '@hooks/useController';
import { LANG } from 'types';
import { observer } from 'mobx-react';

const General: FC = observer(() => {
    const { locale, lang } = useStore();
    const { switchLang } = useController();

    const clickHandler = () => {
        switchLang(lang === LANG.EN ? LANG.RU : LANG.EN);
    };

    return (
        <div>
            <nav>
                <a href="/">{locale['nav-general']}</a>
                <a href="/">{locale['nav-library']}</a>
                <a href="/">{locale['nav-profile']}</a>
            </nav>
            <h1>{locale['error-network']}</h1>
            <button onClick={clickHandler}>{locale['switch-lang']}</button>
        </div>
    );
});

export default General;
