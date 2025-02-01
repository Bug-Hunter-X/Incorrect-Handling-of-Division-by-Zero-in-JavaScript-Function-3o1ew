function foo(a, b) {
  if (a === 0 || b === 0) {
    if (a === 0 && b === 0) {
      return NaN; // Handle 0/0 case
    } else if (b === 0) {
      return Infinity; // Handle division by zero
    } else {
      return 0; // Handle a = 0, b != 0 
    }
  } else {
    return a / b; 
  }
}

console.log(foo(10, 2)); // Output: 5
console.log(foo(0, 5)); // Output: 0
console.log(foo(5, 0)); // Output: Infinity
console.log(foo(0,0)); // Output: NaN