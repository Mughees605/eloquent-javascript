// Methods are nothing more than properties that hold function values. This is a
// simple method:
let rabbit = {};
rabbit.speak = function(line) {
console.log(`The rabbit says '${line}'`);
};
rabbit.speak("I'm alive.");
// → The rabbit says 'I'm alive.'


// for passing explicitly
let rabbit = {type:"new"}
function speak(line){
    console.log(`The ${this.type} and ${this.name}`)
}

speak.call(rabbit, "HELLO");

// The new and HELLO