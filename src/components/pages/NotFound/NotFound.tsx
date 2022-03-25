import React from 'react';
import block from 'bem-cn-custom';

import { Page404Icon } from '@assets/images';
import { Button } from '@components';

import './NotFound.styl';

const classnames = block('not-found');

const NotFound = () => (
    <div className={classnames()}>
        <div className={classnames('top')}>
            <img src={Page404Icon} alt="Error 404: Not Founded" />
            <h1>404</h1>
            <p>Я что-то нажал и всё сломалось</p>
        </div>
        <Button type="primary" to="/" fillWidth>
            Вернуться на главную
        </Button>
    </div>
);

export default NotFound;
