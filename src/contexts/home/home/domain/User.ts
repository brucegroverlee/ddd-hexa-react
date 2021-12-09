class User {
  public firstname: string;
  public lastname: string;
  private quote: string;

  constructor(firstname: string, lastname: string, quote: string = '') {
    this.firstname = firstname;
    this.lastname = lastname;
    this.quote = quote;
  }

  public static create(user: User): User {
    return new User(user.firstname, user.lastname, user.getQuote());
  }

  public getFirstname(): string {
    return this.firstname;
  }

  public getLastname(): string {
    return this.lastname;
  }

  public getFullname(): string {
    return this.firstname + ' ' + this.lastname;
  }

  public getQuote(): string {
    return this.quote;
  }

  public updateRandomQuote(): User {
    this.quote = new Date().toString();
    return User.create(this);
  }

  public updateRandomLastname(): User {
    this.lastname = new Date().toString();
    return User.create(this);
  }
}

export default User;
