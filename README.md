# JavaScript Division by Zero Bug

This repository demonstrates a common error in JavaScript: improper handling of division by zero. The `foo` function does not correctly handle cases where either `a` or `b` is zero, leading to unexpected behavior (specifically, `Infinity` or `0` instead of an error or `NaN`). The solution demonstrates proper handling of these edge cases.

## Bug

The original code (`bug.js`) contains the flawed `foo` function.

## Solution

The corrected code (`bugSolution.js`) includes error handling and produces more robust results.
