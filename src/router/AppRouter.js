import React from 'react';
import {
    BrowserRouter as Router, Routes,
    Route,
} from 'react-router-dom';
import MainPage from '../components/MainPage';

const AppRouter = () => {
    return (
        <Router>
            <div>
                <div className="main-content">
                    <Routes >
                        <Route element={<MainPage />} path="/" exact={true} />
                    </Routes >
                </div>
            </div>
        </Router>
    );
};

export default AppRouter;