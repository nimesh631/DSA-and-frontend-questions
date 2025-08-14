// Day 4 – Searching & Sorting Basics
// 1. Linear Search

// Check each element one by one.

// Time Complexity: O(n)

// Example:
function LinearSearch(arr,target){
    for(let i = 0; i< arr.length; i++){
        if(arr[i] === target) return i;
    }
    return -1;
}

console.log(LinearSearch([5,3,8,4,2],8)); //2