import User from './User';

interface SessionService {
  getUser(token: string): Promise<User>;
}

export default SessionService;
