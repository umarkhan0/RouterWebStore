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
import YourProfilePage from '../pages/yourProfilePage.jsx';
import axios from 'axios';
const AppRouter = () => {
const {profile} = React.useContext(userContext);
console.log(profile);
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<ShowChasePage />} />
                <Route path='/signUp' element={!profile ? <SignUp /> : <Navigate to="/" />} />
                <Route path='/otp' element={!profile ? <OTPverify /> : <Navigate to="/" />} />
                <Route path='/login' element={!profile ? <Login /> :<Navigate to="/" />} />
                <Route path='/veiw' element={<View />} />
                <Route path='/profile' element={profile ? <YourProfilePage /> : <Navigate to="/" /> } />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
