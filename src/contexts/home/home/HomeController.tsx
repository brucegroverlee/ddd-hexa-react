import React from 'react';

import HomeView from './HomeView';
import useUser from './store/useUser';
import SessionService from './domain/SessionService';

interface HomeControllerProps {
  sessionService: SessionService;
}

function HomeController(props: HomeControllerProps) {
  const { sessionService } = props;
  const { user, setUser } = useUser({
    sessionService,
  });

  return <HomeView user={user} setUser={setUser} />;
}

export default HomeController;
