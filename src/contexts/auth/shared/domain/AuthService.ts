interface AuthService {
  signin(username: string, password: string): Promise<string>;
}

export default AuthService;
