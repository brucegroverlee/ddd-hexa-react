import AuthService from '../../domain/AuthService';

const data = [{ username: 'glee', password: '1234' }];

class MockAuthService implements AuthService {
  async signin(username: string, password: string): Promise<string> {
    const user = data.find(
      (item) => item.username === username && item.password === password,
    );

    if (!user) {
      throw new Error('There is not a user :(');
    }

    return 'zxcvb';
  }
}

export default MockAuthService;
