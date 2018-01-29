// function Power(base , exponent){
//     if(exponent === 0){
//          return 1;
//     }
//     else {
//          let number = Power(base , exponent-1)
//          let multiply = base * number
//         return multiply
//     }
// }

// const power =  Power(6,3)


//output 
// 2 * Power(2, 2) 3 - 1 = 
// 2 * Power(2 , 1) 2 - 1 // second return 4 = 2 * 2
// 2 * Power(2, 0)  1 - 1  if condition return 1 // first step return 2 

// Now 
//2 * 1;


// SEQUENCE

/*Consider this puzzle: by starting from the number 1 and repeatedly either
 adding 5 or multiplying by 3, an infinite amount of new numbers can be produced.
 How would you write a function that,given a number, tries to find a sequence of
 such additions and multiplications that produce that number?
 For example, the number 13 could be reached by first multiplying by 3 and then adding 5 twice, whereas the number 15 cannot be reached at all.
*/


function findSolution(target) {
    function find(current, history) {
        if (current == target) {  //If the current number is the target number, the current history is a way to reach that target, so it is simply returned.
            return history
        }
        else if (current > target) { // If the current number is greater than the target, there’s no sense in further exploring this history since both adding and multiplying will only make the number bigger
            return null
        }
        else {
            return find(current + 5, "(" + history + " + 5 )") ||
                find(current * 3, "(" + history + " * 3)");
        }
        return find(1, "1");
    }
}
