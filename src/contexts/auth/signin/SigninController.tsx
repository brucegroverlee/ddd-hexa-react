import React from 'react';

import SigninView from './SigninView';
import useSigninForm from './store/useSigninForm';
import AuthService from '../shared/domain/AuthService';

interface SigninControllerProps {
  authService: AuthService;
}

function SigninController(props: SigninControllerProps) {
  const { authService } = props;
  const {
    username,
    setUsername,
    password,
    setPassword,
    isFetching,
    handleOnSubmit,
  } = useSigninForm({ authService });

  return (
    <SigninView
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      isFetching={isFetching}
      handleOnSubmit={handleOnSubmit}
    />
  );
}

export default SigninController;
