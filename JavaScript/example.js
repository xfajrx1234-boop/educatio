function findLargestNumber(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log("أكبر قيمة هي:", max);
}

const numbers = [5, 12, 8, 23, 4];
findLargestNumber(numbers);
