// Write a function that will take an array as input and return the sum of the two largest
// numbers in a n array.For example, in the array[3, 7, 1, 5, 11, 19] the result would be 30
// because 11 and 19 are the largest numbers.


function sumOfTwoLargestNumbers(arr) {
    if (arr.length < 2) {
        throw new Error("Array must contain at least two elements");
    }

    let firstMax = -Infinity;
    let secondMax = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstMax) {
            secondMax = firstMax;
            firstMax = arr[i];
        } else if (arr[i] > secondMax) {
            secondMax = arr[i];
        }
    }

    return firstMax + secondMax;
}

let arrayForSum = [3, 7, 1, 25, 11, 19];
let sum = sumOfTwoLargestNumbers(arrayForSum);
console.log(sum);  