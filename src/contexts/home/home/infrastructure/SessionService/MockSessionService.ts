// import faker from 'faker';
import SessionService from '../../domain/SessionService';
import User from '../../domain/User';
import UserFirstname from '../../domain/UserFirstname';
import UserLastname from '../../domain/UserLastname';
import UserMoney from '../../domain/UserMoney';

class MockSessionService implements SessionService {
  getUser(): Promise<User> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          new User(
            UserFirstname.create('Grover'),
            UserLastname.create('Lee'),
            UserMoney.create(10),
          ),
        );
      }, 3000);
    });
  }

  getOtherUser(): Promise<User> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          new User(
            UserFirstname.create('Kevin'),
            UserLastname.create('Chin'),
            UserMoney.create(99),
          ),
        );
      }, 3000);
    });
  }
}

export default MockSessionService;
