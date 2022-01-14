import { useEffect } from 'react';
import { useStateModel } from '../../../../frameworks/mvsm';

import SessionService from '../domain/SessionService';
import User from '../domain/User';
import HomeViewModel from '../domain/HomeViewModel';
import Loading from '../domain/Loading';

interface UseUser {
  loading: Loading;
  user: User | undefined;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  homeViewModel: HomeViewModel;
}

interface UseUserProps {
  sessionService: SessionService;
}

function useUser(props: UseUserProps): UseUser {
  const { sessionService } = props;

  const [loading] = useStateModel<Loading>(Loading, new Loading());
  const [user, setUser] = useStateModel<User>(User);

  const homeViewModel = new HomeViewModel(
    loading as Loading,
    user as User,
    setUser,
    sessionService,
  );

  useEffect(() => {
    homeViewModel.initUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    loading: loading as Loading,
    user: user as User | undefined,
    setUser: setUser as React.Dispatch<React.SetStateAction<User | undefined>>,
    homeViewModel,
  };
}

export default useUser;
