function Counter() { 
  var count = 0; 
  this.get = function() { 
    return count; 
  }; 
  this.increment = function() { 
    return count += 1; 
  }; 
} 
// second method
function Counter() {
  this._count = 0;
}
Counter.prototype.get = function () {
  return this._count;
}
Counter.prototype.increment = function() {
  return this._count += 1;
}
//This second method is in ways both better and worse than the previous one. Starting with the good things.
//The object’s methods are now defined on the object’s prototype which now makes every object much lighter on memory and processor usage.
