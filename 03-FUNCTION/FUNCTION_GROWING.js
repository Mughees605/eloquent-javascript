// We want to write a program that prints two numbers, the numbers
// of cows and chickens on a farm, with the words Cows and Chickens after
// them, and zeros padded before both numbers so that they are always
// three digits long.
// 007 Cows
// 011 Chickens
function zeroPad(number , width){
 var string = String(number);
 while (string.length < width) {
    string = "0" + string
 }
 return string;
}

function printFarmInventory(cows, chickens, pigs){
    console . log ( zeroPad ( cows , 3) + " Cows ") ;
    console . log ( zeroPad ( chickens , 3) + " Chickens ") ;
    console . log ( zeroPad ( pigs , 3) + " Pigs ") ;
}

printFarmInventory(3,4,12)

// Pure Function
// A pure function is a specific kind of value-producing function that not
// only has no side effects but also doesn’t rely on side effects from other
// code—for example, it doesn’t read global variables that are occasionally
// changed by other code. A pure function has the pleasant property that,
// when called with the same arguments, it always produces the same value
// (and doesn’t do anything else).