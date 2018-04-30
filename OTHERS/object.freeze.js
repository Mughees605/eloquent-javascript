// The Object.freeze() method freezes an object: that is, prevents new properties from being added to it; prevents
// existing properties from being removed;

const object1 = {
    property1: 42
  };
  
  const object2 = Object.freeze(object1);
  
  object2.property1 = 33;
  // Throws an error in strict mode
  
  console.log(object2.property1);
  // expected output: 42
  