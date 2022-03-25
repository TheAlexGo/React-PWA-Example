import React from 'react';
import block from 'bem-cn-custom';
import { observer } from 'mobx-react';

import { Page404Icon } from '@assets/images';
import { Button, SwitchLangButton } from '@components';
import { useStore } from '@hooks/useStore';

import './NotFound.scss';

const classnames = block('not-found');

const NotFound = observer(() => {
    const { locale } = useStore();

    return (
        <div className={classnames()}>
            <SwitchLangButton />
            <div className={classnames('top')}>
                <img src={Page404Icon} alt="Error 404: Not Founded" />
                <h1>404</h1>
                <p>{locale['error-404-title']}</p>
            </div>
            <Button type="primary" to="/" fillWidth>
                {locale['error-404-button']}
            </Button>
        </div>
    );
});

export default NotFound;
