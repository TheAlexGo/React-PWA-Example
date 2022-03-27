import React, { Suspense, useEffect } from 'react';
import { observer } from 'mobx-react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { General, Page404 } from '@pages';
import { useController } from '@hooks/useController';
import { useStore } from '@hooks/useStore';

const App = observer(() => {
    const { initResource } = useController();
    const { lang } = useStore();

    useEffect(() => {
        initResource(lang);
    }, [initResource, lang]);

    return (
        <BrowserRouter>
            <Suspense fallback={<div />}>
                <Routes>
                    <Route path="/" element={<General />} />
                    <Route path="*" element={<Page404 />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
});

export default App;
