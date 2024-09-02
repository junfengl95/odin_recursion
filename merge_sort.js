function mergeSort(array){
    // Base case
    if (array.length <= 1){
        return array;
    }

    // Divide the array by middle index
    const middleIndex = Math.floor(array.length / 2);

    const left = mergeSort(array.slice(0, middleIndex));
    const right = mergeSort(array.slice(middleIndex));

    return merge(left, right);
}

// Helper function to merge
function merge(left, right){
    let sortedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Merge the 2 arrays while there are elements in both
    while (leftIndex < left.length && rightIndex < right.length){
        if (left[leftIndex] < right[rightIndex]){
            sortedArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            sortedArray.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return sortedArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


let array1= [3, 2, 1, 13, 8, 5, 0, 1];
let array2 = [105, 79, 100, 110];

console.log(mergeSort(array1));
console.log(mergeSort(array2));