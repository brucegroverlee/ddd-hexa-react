import UserFirstname from './UserFirstname';
import UserLastname from './UserLastname';
import UserMoney from './UserMoney';

class User {
  public firstname: UserFirstname;
  public lastname: UserLastname;
  public money: UserMoney;

  constructor(
    firstname: UserFirstname,
    lastname: UserLastname,
    money: UserMoney,
  ) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.money = money;
  }

  public setFirstname(firstname: UserFirstname): void {
    this.firstname = firstname;
  }

  public setLastname(lastname: UserLastname): void {
    this.lastname = lastname;
  }

  public updateProperties(
    firstname: UserFirstname,
    lastname: UserLastname,
    money: UserMoney,
  ): void {
    this.firstname = firstname;
    this.lastname = lastname;
    this.money = money;
  }

  public getFullname(): string {
    return this.firstname.getValue() + ' ' + this.lastname.getValue();
  }

  public updateRandomLastname(): void {
    this.lastname = UserLastname.createRamdon();
  }
}

export default User;
