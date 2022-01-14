import User from './User';

interface SessionService {
  getUser(): Promise<User>;
  getOtherUser(): Promise<User>;
}

export default SessionService;
