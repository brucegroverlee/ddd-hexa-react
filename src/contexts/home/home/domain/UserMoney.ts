import NumberValueObject from '../../../../frameworks/ddd/domain/NumberValueObject';

class UserMoney extends NumberValueObject {
  public static create(value: number): UserMoney {
    // place here any validation
    return new UserMoney(value);
  }

  public showWithCurrency(): string {
    return '$' + this.value;
  }
}

export default UserMoney;
