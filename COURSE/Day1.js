//max value in array

function max(arr){
    const n = arr.length;
    let max = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

//explore Big O notation
//way to describe worst case scenario
// O(1)
// O(n)
// O(n^2)