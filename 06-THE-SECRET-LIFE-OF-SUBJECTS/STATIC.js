// Definition for static
// Sometimes you want to attach some properties directly to your 
// constructor function, rather than to the prototype.
//  Such methods won’t have access to a class instance,
//  but can for example be used to provide additional ways to create instances.

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