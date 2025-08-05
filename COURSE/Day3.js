// Topics: Strings in Detail

// 1. Basic String Manipulation Techniques

let str = "hello";
// str = str.toUpperCase();
// str = str.toLowerCase();
// str = str.split("");
// str = str.replace("e", "a");
// str = str.slice(1,4);
// str = str.substring(0,3); //hell
// str = str.indexOf("el"); //1
// str = str.includes("ell"); //true
str = str.includes("elo"); //false
console.log(str);

let arr = ["apple", "banana", "cherry"];
let fruitString = arr.join(", ");
console.log(fruitString); //apple, banana, cherry


// Check if a string reads the same forwards and backwards.

//Method 1: Reverse and Compare

// function isPalindrome(str) {
//  const reversed = str.split("").reverse().join("");
//  return str === reversed;
// }

// console.log(isPalindrome("madam")); // true


// Method 2: Two-pointer approach
function isPalindrome(str) {
  let left = 0, right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
}

console.log(isPalindrome("madam"));


//Frequency Counter: Count characters in a string using an object (or Map).

function charFrequency(str){
    const freq = {};
    for (let char of str){
        freq[char] = (freq[char] || 0) + 1;
    }
    return freq;
}
console.log(charFrequency("banana")) // { b: 1, a: 3, n: 2 }

// Anagram Check :Two strings are anagrams if they contain the same characters in any order.

// Method 1: Sort and compare
function isAnagram(str1, str2) {
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

console.log(isAnagram("listen", "silent")); // true

// Method 2: Frequency map
function isAnagram(str1,str2){
    if(str1.length !== str2.length) return false;

    const map = {};
    for( let char of str1){
        map[char] = (map[char] || 0)+1;
    }

    for(let char of str2 ){
        if(!map[char]) return false;
        map[char]--;
    }

    return true;
}

isAnagram("listen", "silent"); // true
isAnagram("hello", "ollhe");   // true
isAnagram("test", "ttew");     // false
