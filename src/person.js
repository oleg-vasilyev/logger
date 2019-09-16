
export class Person {
  get name() {
    return this._name;
  }

  constructor(name) {
    this._name = name;
  }
}