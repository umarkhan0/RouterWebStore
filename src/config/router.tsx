import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ShowChasePage from '../pages/showchasing.tsx';
// import Login from '../components/modal.jsx';
import View from '../pages/viewCard.jsx';
import OTPverify from '../pages/otpVerify.jsx';
import Login from '../pages/login.jsx';
import SignUp from '../pages/signUp.jsx';
const AppRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<ShowChasePage />} />
                <Route path='/signUp' element={<SignUp />} />
                <Route path='/otp' element={<OTPverify />} />

                <Route path='/login' element={<Login />} />
                <Route path='/veiw' element={<View />} />


            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
