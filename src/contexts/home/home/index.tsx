import React from 'react';

import HomeController from './HomeController';
import MockSessionService from './infrastructure/SessionService/MockSessionService';

function InjectedHomeController() {
  const mockSessionService = new MockSessionService();

  return <HomeController sessionService={mockSessionService} />;
}

export default InjectedHomeController;
