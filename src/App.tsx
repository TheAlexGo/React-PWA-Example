import React, { Suspense, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Page404 } from '@pages';
import { useController } from './hooks/useController';

const App = () => {
    const ctrl = useController();

    useEffect(() => {
        ctrl.initLocale();
    }, [ctrl]);

    return (
        <BrowserRouter>
            <Suspense fallback={<div />}>
                <Routes>
                    <Route path="*" element={<Page404 />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default App;
