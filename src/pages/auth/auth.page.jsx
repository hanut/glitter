import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './style.scss';

const AuthPage = () => (

    <div className="sign-in-and-sign-up">
        <SignIn/>
        <SignUp/>
    </div>

)

export default AuthPage;