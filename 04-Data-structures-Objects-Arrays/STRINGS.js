// Values of type string, number, and Boolean are not objects,
// and though the language doesn’t complain if you try to set new
// properties on them, it doesn’t actually store those properties.
// As mentioned before, such values are immutable and cannot be changed

let kim = "Kim";
kim.age = 88;
console.log(kim.age);
// → undefined

// One difference is that a string’s indexOf can search for a string
// containing more than one character, whereas the corresponding array
// method looks only for a single element.

console.log("one two three".indexOf("ee"));
// → 11