import Car from './10-car';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color, range);
    // eslint-disable-next-line no-underscore-dangle
    this._brand = brand;
    // eslint-disable-next-line no-underscore-dangle
    this._motor = motor;
    // eslint-disable-next-line no-underscore-dangle
    this._color = color;
    // eslint-disable-next-line no-underscore-dangle
    this._range = range;
  }

  // Overriding cloneCar to return a Car object instead of EVCar
  cloneCar() {
    // eslint-disable-next-line no-underscore-dangle
    return new Car(this._brand, this._motor, this._color, this._range);
  }
}

export default EVCar;
