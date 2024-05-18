class HolbertonClass {
  constructor(size, location) {
    // eslint-disable-next-line no-underscore-dangle
    this._size = size;
    // eslint-disable-next-line no-underscore-dangle
    this._location = location;
  }

  // Method to return the size when cast to a number
  valueOf() {
    // eslint-disable-next-line no-underscore-dangle
    return this._size;
  }

  // Method to return the location when cast to a string
  toString() {
    // eslint-disable-next-line no-underscore-dangle
    return this._location;
  }
}

export default HolbertonClass;
