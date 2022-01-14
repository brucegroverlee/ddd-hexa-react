import { useState, Dispatch, SetStateAction } from 'react';

export class StateModel<G> {
  private BaseModelClass: new (...args: any[]) => G;
  private model: G & { [method: string]: any };
  private setModel: Dispatch<SetStateAction<G | undefined>>;
  [method: string]: any;

  constructor(
    BaseModelClass: new (...args: any[]) => G,
    model: G,
    setModel: Dispatch<SetStateAction<G | undefined>>,
  ) {
    this.BaseModelClass = BaseModelClass;
    this.model = model;
    this.setModel = setModel;

    this.defineProperties();
    this.defineMethods();
  }

  private defineProperties() {
    const properties = Object.getOwnPropertyNames(this.model);

    properties.forEach((modelProperty: string) => {
      this[modelProperty] = this.model[modelProperty];
    });
  }

  private defineMethods() {
    const methods = Object.getOwnPropertyNames(
      Object.getPrototypeOf(this.model),
    ).filter((property: string) => property !== 'constructor');

    methods.forEach((modelMethod: string) => {
      this[modelMethod] = function (...args: any[]) {
        if (modelMethod.startsWith('get') || modelMethod.startsWith('is')) {
          return this.model[modelMethod](...args);
        } else {
          this.model[modelMethod](...args);
          const newBaseModel = { ...this.model };
          Object.setPrototypeOf(newBaseModel, this.BaseModelClass.prototype);
          this.setModel(newBaseModel);
        }
      };
    });
  }

  public getState(): G {
    return this.model;
  }
}

export function useStateModel<S>(
  BaseModelClass: new (...args: any[]) => S,
  initialState: S | (() => S) | undefined = undefined,
): [(StateModel<S> & S) | null, Dispatch<S | undefined>] {
  const [baseModel, setBaseModel] = useState<S | undefined>(initialState);

  const stateModel = baseModel
    ? (new StateModel<S>(
        BaseModelClass,
        baseModel,
        setBaseModel,
      ) as StateModel<S> & S)
    : null;

  function setStateModel(newBaseModel: S | undefined) {
    setBaseModel(newBaseModel);
  }

  return [stateModel, setStateModel];
}

export default useStateModel;
