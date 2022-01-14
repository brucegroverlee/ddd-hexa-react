import StringValueObject from '../../../../frameworks/ddd/domain/StringValueObject';

class UserLastname extends StringValueObject {
  public static create(value: string): UserLastname {
    // place here any validation
    return new UserLastname(value);
  }

  public static createRamdon(): UserLastname {
    return new UserLastname('Chu');
  }
}

export default UserLastname;
