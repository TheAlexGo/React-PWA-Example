import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Page404 } from '@pages';

const App = () => {
    return (
        <Router>
            <Suspense fallback={<div />}>
                <div className="App">
                    <Routes>
                        <Route path="*" element={<Page404 />} />
                    </Routes>
                </div>
            </Suspense>
        </Router>
    );
};

export default App;
