import React from 'react';
import {
    BrowserRouter as Router, Routes,
    Route,
} from 'react-router-dom';
import AddPage from '../components/AddPage';
import MainPage from '../components/MainPage';
import EditPage from '../components/EditPage';
const AppRouter = () => {
    return (
        <Router>
            <div>
                <div className="main-content">
                    <Routes >
                        <Route element={<MainPage />} path="/" exact={true} />
                        <Route element={<AddPage />} path="/add" />
                        <Route element={<EditPage />} path="/edit/:index" />
                    </Routes >
                </div>
            </div>
        </Router>
    );
};

export default AppRouter;