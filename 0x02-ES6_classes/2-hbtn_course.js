class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    // eslint-disable-next-line no-underscore-dangle
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    // eslint-disable-next-line no-underscore-dangle
    this._name = newName;
  }

  get length() {
    // eslint-disable-next-line no-underscore-dangle
    return this._length;
  }

  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw new TypeError('Length must be a number');
    }
    // eslint-disable-next-line no-underscore-dangle
    this._length = newLength;
  }

  get students() {
    // eslint-disable-next-line no-underscore-dangle
    return this._students;
  }

  set students(newStudents) {
    if (!Array.isArray(newStudents) || newStudents.some((student) => typeof student !== 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    // eslint-disable-next-line no-underscore-dangle
    this._students = newStudents;
  }
}

export default HolbertonCourse;
