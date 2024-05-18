import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    // eslint-disable-next-line no-underscore-dangle
    this._floors = floors;
  }

  get floors() {
    // eslint-disable-next-line no-underscore-dangle
    return this._floors;
  }

  set floors(value) {
    if (typeof floors !== 'number') {
      throw new TypeError('Floors must be a number');
    }
    // eslint-disable-next-line no-underscore-dangle
    this._floors = value;
  }

  evacuationWarningMessage() {
    // eslint-disable-next-line no-underscore-dangle
    return `Evacuate slowly the ${this._floors} floors.`;
  }
}
