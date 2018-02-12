// You can even write functions that provide new types of control flow
function repeat(n, action){
    for(var i = 0; i < n; i++){
         action(i)
    }
}

function unless(test, then){
  if(!test) then()
}

repeat(3, (i) => {
 unless( i % 2 , ()=>{
   console.log( i + "is Even")   
 })
})