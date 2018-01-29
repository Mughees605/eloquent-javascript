function Power(base , exponent){
    if(exponent === 0){
         return 1;
    }
    else {
        return base * Power(base , exponent-1)
    }
}

const power =  Power(6,3)


//output 
// 2 * Power(2, 2) 3 - 1 = 
 // 2 * Power(2 , 1) 2 - 1 // second return 4 = 2 * 2
  // 2 * Power(2, 0)  1 - 1  if condition return 1 // first step return 2 

// Now 
//2 * 1;

function firstRecursice(a = 2, b = 3-1){
    if(exponent = 1){
        if(exponent === 0){
            return 1;
       }
       else {
           return base * Power(base , exponent-1)
       }
    }
}



