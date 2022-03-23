import React, { Suspense } from 'react';
import Page404 from 'components/pages/Page404';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <Suspense fallback={<div />}>
                <div className="App">
                    <Routes>
                        {/*<Route path="/" element={<Layouts.Main />}>*/}
                        {/*<Route index element={<GeneralPage />} />*/}
                        {/*<Route path={LINKS.LIBRARY_LINK} element={<LibraryPage />} />*/}
                        {/*<Route path={`${LINKS.LIBRARY_LINK}/:mangaId`}>*/}
                        {/*    <Route index element={<MangaPage />} />*/}
                        {/*    <Route path={`${LINKS.READER_LINK}/:chapterId`} element={<ReaderPage />} />*/}
                        {/*</Route>*/}

                        {/*<Route path={LINKS.PROFILE_LINK}>*/}
                        {/*    <Route index element={<ProfilePage />} />*/}
                        {/*    <Route path={LINKS.LOGIN_LINK} element={<SignInPage />} />*/}
                        {/*    <Route path={LINKS.REGISTER_LINK} element={<RegisterPage />} />*/}
                        {/*    <Route path={LINKS.RECOVERY_LINK}>*/}
                        {/*        <Route index element={<RecoveryPage />} />*/}
                        {/*        <Route*/}
                        {/*            path={`${LINKS.RECOVERY_SUCCESS_LINK}/:mail`}*/}
                        {/*            element={<RecoverySuccessPage />}*/}
                        {/*        />*/}
                        {/*    </Route>*/}
                        {/*</Route>*/}
                        {/*</Route>*/}
                        <Route path="*" element={<Page404 />} />
                    </Routes>
                </div>
            </Suspense>
        </Router>
    );
};

export default App;
