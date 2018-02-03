function range(start, end, step = 1){
    let rangeArray = [];
     if(step > 0){
           for(let i = start ; i <= end; i += step){
             rangeArray.push(i);      
          }
     }
     else{
         for(let j = start ; j >= end; j += step  ){
             rangeArray.push(j)  
          }
     }
     return rangeArray;
 }
 
 function sum(rangeFunc){
   return rangeFunc.reduce((a,b)=>{
      return a + b
     })
 }
 
 let c = sum(range(1, 10));
 