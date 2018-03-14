import Rabbit from './index';

// let say we set teet property on Rabbit protoype class 
Rabbit.prototype.teeth = 'small';

let killerRabbit  = new Rabbit();
let blackRabbit = new Rabbit();

// now i have created two instances of Rabbbit class 
// if I type "killerRabbit.teet" I will get "small" and same for blackRabbit
// now I can change 
//When you add a property to an object, whether it is present in the prototype
//or not, the property is added to the object itself, which will henceforth have it
//as its own property.

killerRabbit.teeth = "long, sharp, and bloody";
console.log(killerRabbit.teeth);
// → long, sharp, and bloody
console.log(blackRabbit.teeth);
// → small
console.log(Rabbit.prototype.teeth);
// → small
// The following diagram sketches the situation
