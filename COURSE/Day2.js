//array , key array patterns
// 1 two pointers

//check if array has a pair that sums to target
function hasSum(arr, target){
    let left = 0, right =arr.length-1;
    while(left , right){
        let sum = arr[left] + arr[right];
        if(sum === target) return true;

        sum < target ? left++ : right --;
    }
    return false;
}

console.log(hasSum([1,2,4,7,11], 9))

// 2 Sliding Window 
// max sum of subarray of size k 

function maxSubArraySum(arr,k){
    let max = 0, sum =0;
    for(let i =0;i<k;i++) sum += arr[i];
    max = sum;

    for(let i = k; i< arr.length;i++){
        sum = sum + arr[i] - arr[i-k];
        max = Math.max(max,sum);
    }
    return max;
}

maxSubArraySum([2,1,5,1,3,2],3)

// prefix sum used to find sum of subarrays in constant time.

function prefixSum(arr){
    let prefix = [arr[0]];
    for(let i = 1;i< arr.length;i++){
        prefix[i] = prefix[i-1] + arr[i]
    }
    return prefix;
}

let arr = [2,4,6,8];
let pre = prefixSum(arr);
console.log(pre[3] - pre[0]); //20-2 = 18

// Array reversal
function reverseArray(arr){
    let left = 0, right = arr.length - 1;
    while(left<right){
        [arr[left],arr[right]] = [arr[right], arr[left]];
        left ++;
        right --;
    }
    return arr;
}

console.log(reverseArray([3,1,2,4]));

//palindrome 
function palindrome(arr){
    let left = 0, right = arr.length - 1;
    if(arr[left] !== arr[right]){
        return false;
    }
    return true;
}

console.log(palindrome([3,1,2,3]));

//remove duplicates (should be sorted)
function removeDup(arr){
    let i = 0;
    for(let j=1; j<arr.length;j++){
        if(arr[j] !== arr[i]){
            i++;
            arr[i] = arr[j];
        }
    }
    return arr.slice(0,i+1);
}
console.log(removeDuplicates([1, 1, 2, 3, 3, 4])); // [1, 2, 3, 4]

// using set
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicates([1, 1, 2, 3, 3, 4])); // [1, 2, 3, 4]

// Real interview example
// find max consecutive 1s in binary Array
function findmaxConsecutivesOnes(nums){
    let count = 0, max = 0;
    for (let num of nums){
        count = num === 1 ? count + 1 : 0;
        max = Math.max(max, count);
    }
    return max;
}


//move all 0s to end 

function moveZerostoEnd(arr){
    let i=0;
    for(let j=0;j<arr.length;j++){
        if(arr[j] !== 0){
            [arr[i],arr[j]] = [arr[j],arr[i]];
            i++;
        }
    }
}

// max prod of two Element in array 
function maxProduct(arr){
    let max1 = 0 , max2 = 0;
    for(let num of arr){
        if(num > max1){
            max2= max1
            max1 = num;
        }
        else if(num > max2){
            max2 =num;
        }
    }
    return (max1 - 1) * (max2 - 1);
}