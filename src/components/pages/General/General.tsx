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
            {locale['test']}
            <button onClick={clickHandler}>Switch lang</button>
        </div>
    );
});

export default General;
