// GETTER DEFINITION

//The get syntax binds an object property to a function that will be called when that property is looked up.

//SETTER DEFINITION

// The set syntax binds an object property to a function to be called when there is an attempt to set that property.


// GETTERS AND SETTERS EXAMPLE

class Temperature {
    constructor(celsius) {
        this.celsius = celsius;
    }
    get fahrenheit() {
        return this.celsius * 1.8 + 32;
    }
    set fahrenheit(value) {
        this.celsius = (value - 32) / 1.8;
    }

    static fromFahrenheit(value) {
        return new Temperature((value - 32) / 1.8);
    }
}

let temp = new Temperature(22);
console.log(temp.fahrenheit);
// → 71.6
temp.fahrenheit = 86;
console.log(temp.celsius);
  // → 30