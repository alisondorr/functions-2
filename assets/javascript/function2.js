//The Katas
//1. Add (1 point)
//Write a function named "add" which takes two arguments (as input variables) and returns their sum.
//You may use built-in operators in order to finish this kata.For example, calling add(2, 4) should return a result of 6.
let a = 2
let b = 4
function add(a, b) {
    return a + b
}
let addition = add(a, b)
console.log(addition)
//function printAdd() {
//document.write("The sum is: ", sum)
//printAdd()

//2. Multiply (2 points)
//Write a function named "multiply" which takes two arguments (as input variables) and returns their product.
//You may not use built-in math operators or functions (such as the * multiplication operator). Instead, you will use a FOR loop which calls your add function from the first kata.For example, calling multiply(6, 4) should return a result of 24, which could be expressed by adding 6 to itself 4 times:
//6 + 6 + 6 + 6 = 24
let c = 6
let d = 4
function multiply(c, d) {
    let m = 0
    for (let i = 0; i < d; i++) {
        m = add(m, c)
    }
    return m
}
let multiplication = multiply(c, d)
console.log(multiplication)

//3. Power/Exponentiation (2 points)
//Write a function named "power" which takes two arguments ( x and n) and returns the the result of raising x to the nth power.
//You may not use built-in math operators or functions (such as the * multiplication operator), or the ** operator for power/exponentiation). Instead, you will re-use functions you wrote in earlier katas to write this function.
//For example, if we called power(2, 8), we should return 256 by multiplying 2 by itself 8 times:
//2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 = 256
//And to achieve the correct result for power(3, 4), we would want to multiply 3 by itself 4 times:
//3 * 3 * 3 * 3 = 81
//See this Wikipedia article for more details on exponentiation.
//let x = 2
//let n = 8
function power(x, n) {
    let p = 1
    for (let i = 0; i < n; i++) {
        p = multiply(p, x)
    }
    return p
}
let exponentiation = power(2, 8)
console.log(exponentiation)

//4. Factorial(2 points)
//Write a function named "factorial" which takes a single argument and returns the factorial of that value.You may not use built -in math operators or functions(such as the * multiplication operator).Instead, you will re - use functions you wrote in earlier katas to write this function.

//A factorial multiplies a given number by every number below it.For example, "5 factorial"(usually symbolized by 5! in Mathematics) would be:

//5 * 4 * 3 * 2s * 1 = 120
//For example, calling factorial(4) should return a result of 24.
//let f = 5
function factorial(f) {
    let s = 1
    for (let i = 1; i <= f; i++) {
        //fact = multiply(f, (f - 1))
        s = multiply(s, i)
    }
    return s
}
let factorials = factorial(5)
console.log(factorials)

//Bonus: Fibonacci(3 points)
//Write a function named "Fibonacci" which takes an argument n and returns the nth Fibonacci number.You may not use built -in math operators or functions(such as the * multiplication operator).Instead, you will use functions you wrote in earlier katas to write this function.

//For example, calling fibonacci(8) should return a result of 13. The fibonnaci sequence begins:

//0  1  1  2  3  5  8[13]  21
//So, the number in brackets is the 8th Fibonacci number.

//  Hints
//The answers to most of these katas will look similar.They will typically involve:
//declaring a variable to keep track of a final result
//writing a FOR loop to consistently modify the result
//returning the result
//If you struggle for more than 15 minutes on any one thing, ask for help! This is an exercise in critical thinking, not torture.
//  Submission
//Submit your GitHub rep url
//In mathematics, the Fibonacci numbers, commonly denoted Fn, form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,[1]

function fibonacci(b) {
    fib = 0
    let h = []
    h[0] = 0
    h[1] = 1
    for (let i = 2; i <= b; i++) {
        h[i] = add(h[i - 1], h[i - 2])

        fib = add(h[b - 2], h[b - 3])
    }
    return fib;
    return h[0];
    return h[1];
    return h[i];
}
let fibonacciNum = fibonacci(8)
console.log(fibonacciNum)

