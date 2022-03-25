import React, { FC } from 'react';
import { observer } from 'mobx-react';

import { useStore } from '@hooks/useStore';
import { SwitchLangButton } from '@components';

const General: FC = observer(() => {
    const { locale } = useStore();

    return (
        <div>
            <nav>
                <a href="/">{locale['nav-general']}</a>
                <a href="/">{locale['nav-library']}</a>
                <a href="/">{locale['nav-profile']}</a>
            </nav>
            <h1>{locale['error-network']}</h1>
            <SwitchLangButton />
        </div>
    );
});

export default General;
