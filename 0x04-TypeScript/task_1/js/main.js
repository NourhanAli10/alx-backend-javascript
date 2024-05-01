var Teacher = /** @class */ (function () {
    function Teacher(firstName, lastName, fullTimeEmployee, location, teacherInfo) {
        this._additionalAttributes = {};
        this._firstName = firstName;
        this._lastName = lastName;
        this._fullTimeEmployee = fullTimeEmployee;
        this._location = location;
        if (teacherInfo && teacherInfo.yearsOfExperience !== undefined) {
            this._yearsOfExperience = teacherInfo.yearsOfExperience;
        }
        if (teacherInfo && teacherInfo.numberOfReports !== undefined) { // Check if numberOfReports is provided
            this.numberOfReports = teacherInfo.numberOfReports; // Assign numberOfReports if provided
        }
        for (var key in teacherInfo) {
            if (key !== 'yearsOfExperience' && key !== 'numberOfReports') {
                this._additionalAttributes[key] = teacherInfo[key];
            }
        }
    }
    Object.defineProperty(Teacher.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Teacher.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Teacher.prototype, "location", {
        get: function () {
            return this._location;
        },
        set: function (value) {
            this._location = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Teacher.prototype, "fullTimeEmployee", {
        get: function () {
            return this._fullTimeEmployee;
        },
        set: function (value) {
            this._fullTimeEmployee = value;
        },
        enumerable: false,
        configurable: true
    });
    Teacher.prototype.toString = function () {
        var output = "Object\n";
        for (var key in this) {
            if (this.hasOwnProperty(key) && key !== '_additionalAttributes') {
                output += "".concat(key, ": ").concat(this[key], "\n");
            }
        }
        for (var key in this._additionalAttributes) {
            output += "".concat(key, ": ").concat(this._additionalAttributes[key], "\n");
        }
        return output;
    };
    return Teacher;
}());
var director1 = new Teacher('John', 'Doe', true, 'London', { numberOfReports: 17 });
console.log(director1);
