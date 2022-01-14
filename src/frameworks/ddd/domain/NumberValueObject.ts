class NumberValueObject {
  protected value: number;

  constructor(value: number) {
    this.value = value;
  }

  public getValue(): number {
    return this.value;
  }
}

export default NumberValueObject;
