function Counter() { 
  var count = 0; 
  this.get = function() { 
    return count; 
  }; 
  this.increment = function() { 
    return count += 1; 
  }; 
} 
