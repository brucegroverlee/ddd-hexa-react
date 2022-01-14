import React from 'react';

import HomeView from './HomeView';
import useUser from './store/useUser';
import SessionService from './domain/SessionService';

interface HomeControllerProps {
  sessionService: SessionService;
}

function HomeController(props: HomeControllerProps) {
  const { sessionService } = props;
  const { loading, user, homeViewModel } = useUser({
    sessionService,
  });

  return (
    <HomeView loading={loading} user={user} homeViewModel={homeViewModel} />
  );
}

export default HomeController;
