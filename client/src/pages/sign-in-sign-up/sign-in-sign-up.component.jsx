import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import { SignInSingUpContainer } from './sign-in-sign-up.styles';

const SignInAndSignUpPage = () => (
    <SignInSingUpContainer>
        <SignIn />
        <SignUp />
    </SignInSingUpContainer>

);

export default SignInAndSignUpPage;