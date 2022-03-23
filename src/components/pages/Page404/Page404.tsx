import React from 'react';

import { Page404Icon } from '@assets/images';
import { Button } from '@components';
import style from './Page404.module.scss';

const Page404 = () => (
    <div className={style.error404}>
        <div className={style.error404__top}>
            <img src={Page404Icon} alt="Error 404: Not Founded" />
            <h1>404</h1>
            <p>Я что-то нажал и всё сломалось</p>
        </div>
        <Button type="primary" to="/" fillWidth>
            Вернуться на главную
        </Button>
    </div>
);

export default Page404;
