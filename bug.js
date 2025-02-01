function foo(a, b) {
  if (a === 0 || b === 0) {
    return 0; // Incorrect: Should handle 0 separately 
  } else {
    return a / b; 
  }
}

console.log(foo(10, 2)); // Output: 5
console.log(foo(0, 5)); // Output: 0
console.log(foo(5, 0)); // Output: Infinity (should be an error or NaN)
console.log(foo(0,0)); // Output: 0 (should be an error or NaN)