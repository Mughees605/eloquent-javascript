// Abstractions hide details and give us the ability to talk about problems at a higher (or more abstract) level.


function repeat(n, action) {
    for (let i = 0; i < n; i++) {
      action(i);
    }
  }
  
  //repeat(3, console.log);
  // → 0
  // → 1
  // → 2

  let message = "Loading"
  repeat(5 , i =>{
      message += "."
  })
  console.log(message) 
  // Loading.....
