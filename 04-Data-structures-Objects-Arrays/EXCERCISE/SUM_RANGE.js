// my solution
function range(start, end){
    let rangeArray = [];
    for(var i = start ; i <= end; i++){
        rangeArray.push(start++);      
     }
     return rangeArray;
 }
 range(3,5);
 
 function sum(rangeFunc){
   return rangeFunc.reduce((a,b)=>{
      return a + b
     })
 }
 
 sum(range(1,10))
 
 // 55