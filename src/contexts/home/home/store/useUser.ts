import { useState, useEffect } from 'react';

import SessionService from '../domain/SessionService';
import User from '../domain/User';

interface UseUser {
  user: User | undefined;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
}

interface UseUserProps {
  sessionService: SessionService;
}

function useUser(props: UseUserProps): UseUser {
  const { sessionService } = props;

  const [user, setUser] = useState<User>();

  useEffect(() => {
    sessionService.getUser('').then((newUser) => setUser(newUser));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    user,
    setUser,
  };
}

export default useUser;
