// Understanding Recursive Functions
// A recursive function is a function that calls
// itself in order to solve a problem. It works
// by breaking the problem down into smaller 
// sub-problems that are similar to the 
// original problem. Recursion is often used
//  when a problem has a repetitive structure, 
// like computing factorials, calculating 
// Fibonacci numbers, etc.
// falsch commm


function factorial(n) {
    // Base case: If n is 0 or 1, return 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Recursive case: n! = n * (n-1)!
    return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120


// Fibonacci Sequence:
// The Fibonacci sequence is a series of numbers 
// where each number is the sum of the two preceding
// ones, starting with 0 and 1.

// fib(0) = 0
// fib(1) = 1
// Recursive Case:
// fib(n) = fib(n-1) + fib(n-2) for n > 1



// Example of recursive fibonaci
// Recursive JavaScript Code for Fibonacci:

function fibonacci(n) {
    // Base cases: if n is 0 or 1, return the value of n
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }
    // Recursive case: fib(n) = fib(n-1) + fib(n-2)
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(5)); // Output: 5   as fib(5)= fib(4)+fib(3)
