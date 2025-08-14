// Binary Search

// Works only on sorted arrays.

// Repeatedly divide search space in half.

// Time Complexity: O(log n)

// Example:

function binarySearch(){
    let left = 0, right = arr.length -1;

    while (left <= right){
        let mid = Math.floor((left + right)/2);

        if(arr[mid] === target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right =  mid - 1;
    }

    return -1;
}

console.log(binarySearch([1, 3, 5, 7, 9], 5)); // 2