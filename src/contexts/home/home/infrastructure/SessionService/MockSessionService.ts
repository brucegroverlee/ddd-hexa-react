import SessionService from '../../domain/SessionService';
import User from '../../domain/User';

class MockSessionService implements SessionService {
  async getUser(token: string): Promise<User> {
    return new User('Grover', 'Lee');
  }
}

export default MockSessionService;
