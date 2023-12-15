import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ShowChasePage from '../pages/showchasing.tsx';

const AppRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<ShowChasePage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
