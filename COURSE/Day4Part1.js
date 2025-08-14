// Day 4: Recursion Basics and array/string manipulation. in DSA

// Now that you’ve done arrays, strings, and character maps, today we move into recursion — one of the most important problem-solving concepts in DSA.

// 1. What is Recursion?

// Recursion is when a function calls itself to solve a smaller instance of the same problem until it reaches a base case.
// 📌 Structure of recursion
// function recurse(params) {
//     // 1. Base case → stopping condition
//     if (condition) return value;

//     // 2. Recursive call → solve smaller problem
//     return recurse(modifiedParams);
// }

// 2. Key Terms

// Base Case → The condition that stops the recursion (prevents infinite loop).

// Recursive Case → The part where the function calls itself with smaller/simpler data.

// Call Stack → Keeps track of function calls (LIFO — last in, first out).

// examples
// Factorial → n! = n × (n-1) × (n-2) ... × 1

function Factorial(n){
    if(n===0 || n===1) return 1; //base case
    return n * Factorial(n-1); //recursive case
}

console.log(Factorial(5)); //120

// sum of numbers

function sum(n){
    if(n === 0 ) return 0;
    return n + sum(n-1)
}

//reverse string

function reverse(str){
    if(str.length <= 1) return str;
    return reverse(str.slice(1) + str[0]);
}

console.log(("madam").slice(1));

//fibonacci sequence

function fibo(n){
    if(n===0 ) return 0; //base case
    if(n===1 ) return 1; //base case
    return fibo(n-1)+fibo(n-2); //recursive case
}
console.log(fibo(6)); // 8

//max in array (Recursicve)

function findMax(arr){
    if(arr.length === 1) return arr[0];
    let maxofRest = findMax(arr.slice(1));
    return arr[0] > maxofRest? arr[0] : maxofRest;
}

//count vowels in string

function countVowels(str){
    if(str.length === 0) return 0; //base case
    let vowels ="aeiouAEIOU";
    let count = vowels.includes(str[0]) ? 1 : 0;
    return count + countVowels(str.slice(1)); //recursive case
}

console.log(countVowels("banana")); // 3

// palindrom check
function isPalindrome(str){
    if(str.length<=1) return true; //base case
    if (str[0] !== str[str.length - 1]) return false; // mismatch
    return isPalindrome(str.slice(1,-1))
}
// console.log(("madam").slice(1,-1));s
