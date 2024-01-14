import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ShowChasePage from '../pages/showchasing.tsx';
// import Login from '../components/modal.jsx';
import { base_URL } from "../constant/const.js"
import View from '../pages/viewCard.jsx';
import OTPverify from '../pages/otpVerify.jsx';
import Login from '../pages/login.jsx';
import userContext from '../context/userCotext.js';
import SignUp from '../pages/signUp.jsx';
import axios from 'axios';
const AppRouter: React.FC = () => {
const {profile} = React.useContext(userContext);
console.log(profile);
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<ShowChasePage />} />
                <Route path='/signUp' element={!profile?.user?.email ? <SignUp /> : <Navigate to="/" />} />
                <Route path='/otp' element={!profile?.user?.email ? <OTPverify /> : <Navigate to="/" />} />

                <Route path='/login' element={!profile?.user?.email ? <Login /> : <Navigate to="/" />} />
                <Route path='/veiw' element={<View />} />


            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
