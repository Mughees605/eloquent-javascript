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