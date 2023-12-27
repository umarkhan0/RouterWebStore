import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ShowChasePage from '../pages/showchasing.tsx';
// import Login from '../components/modal.jsx';
import Login from '../pages/login.tsx';
import SignUp from '../pages/signUp.tsx';
const AppRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<ShowChasePage />} />
                <Route path='/signUp' element={<SignUp />} />
                <Route path='/login' element={<Login />} />


            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
