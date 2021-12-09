import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthService from '../../shared/domain/AuthService';

interface UseSigninForm {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  isFetching: boolean;
  handleOnSubmit(event: React.FormEvent): void;
}

interface UseUserProps {
  authService: AuthService;
}

function useSigninForm(props: UseUserProps): UseSigninForm {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isFetching, setFetching] = useState<boolean>(false);
  let navigate = useNavigate();

  function handleOnSubmit(event: React.FormEvent) {
    event.preventDefault();

    props.authService
      .signin(username, password)
      .then((accessToken: string) => {
        console.log('accessToken: ', accessToken);
        navigate('/');
      })
      .catch((error: Error) => {
        console.log('Oops!');
        setFetching(false);
      });
  }

  return {
    username,
    setUsername,
    password,
    setPassword,
    isFetching,
    handleOnSubmit,
  };
}

export default useSigninForm;
