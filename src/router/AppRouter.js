import React from 'react';
import {
    BrowserRouter as Router, Routes,
    Route,
} from 'react-router-dom';
import AddPage from '../components/AddPage';
import MainPage from '../components/MainPage';

const AppRouter = () => {
    return (
        <Router>
            <div>
                <div className="main-content">
                    <Routes >
                        <Route element={<MainPage />} path="/" exact={true} />
                        <Route element={<AddPage />} path="/add" />
                    </Routes >
                </div>
            </div>
        </Router>
    );
};

export default AppRouter;