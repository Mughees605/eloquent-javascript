// reading in progress

const toStringSymbol = Symbol("toString");
Array.prototype[toStringSymbol] = function() {
return `${this.length} cm of blue yarn`;
};
console.log([1, 2].toString());
// → 1,2
console.log([1, 2][toStringSymbol]()