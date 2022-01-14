import StringValueObject from '../../../../frameworks/ddd/domain/StringValueObject';

class UserFirstname extends StringValueObject {
  public static create(value: string): UserFirstname {
    // place here any validation
    return new UserFirstname(value);
  }
}

export default UserFirstname;
