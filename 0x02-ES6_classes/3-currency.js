class Currency {
  constructor(code, name) {
    // eslint-disable-next-line no-underscore-dangle
    this._code = code;
    // eslint-disable-next-line no-underscore-dangle
    this._name = name;
  }

  get code() {
    // eslint-disable-next-line no-underscore-dangle
    return this._code;
  }

  set code(value) {
    // eslint-disable-next-line no-underscore-dangle
    this._code = value;
  }

  get name() {
    // eslint-disable-next-line no-underscore-dangle
    return this._name;
  }

  set name(value) {
    // eslint-disable-next-line no-underscore-dangle
    this._name = value;
  }

  // eslint-disable-next-line class-methods-use-this
  displayFullCurrency() {
    // eslint-disable-next-line no-underscore-dangle
    return `${this._name} (${this._code})`;
  }
}

export default Currency;
