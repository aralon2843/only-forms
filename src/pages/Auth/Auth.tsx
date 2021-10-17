import React, { useState } from 'react';
import { Logo } from '../../components/common/Pages.styles';
import Login from '../../components/Login/Login';
import SignUp from '../../components/SignUp/SignUp';
import theme from '../../styles/theme';
import { AuthWrapper, LoginWrapper } from './Auth.styles';

const Auth: React.FC = (): JSX.Element => {
  enum authForms {
    Login = 'LOGIN',
    SignUp = 'SIGNUP',
  }

  const [authForm, setAuthForm] = useState(authForms.Login);

  const onLoginClick = (): void => {
    setAuthForm(authForms.SignUp);
  };

  const onSignUpClock = (): void => {
    setAuthForm(authForms.Login);
  };

  return (
    <AuthWrapper bg={theme.colors.lightGray}>
      <Logo
        lightBlack={theme.colors.lightBlack}
        lightGreen={theme.colors.lightGreen}
        fz={40}>
        ClinicTrack<span>.</span>
      </Logo>
      <LoginWrapper>
        {authForm === authForms.Login ? (
          <Login onClick={onLoginClick} />
        ) : (
          <SignUp onClick={onSignUpClock} />
        )}
      </LoginWrapper>
    </AuthWrapper>
  );
};

export default Auth;
