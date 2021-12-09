import React from 'react';

import SigninController from './SigninController';
import MockAuthService from '../shared/infrastructure/AuthService/MockAuthService';

function InjectedSigninController() {
  const mockAuthService = new MockAuthService();

  return <SigninController authService={mockAuthService} />;
}

export default InjectedSigninController;
