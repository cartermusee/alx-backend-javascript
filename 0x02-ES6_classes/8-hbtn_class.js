export default class HolbertonClass {
  constructor(size, loacation) {
    if (typeof size !== 'number') {
      throw new TypeError('Size is a number');
    }

    if (typeof loacation !== 'string') {
      throw new TypeError('loaction is a string');
    }

    this._size = size;
    this._loacation = loacation;
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._loacation;
  }
}
