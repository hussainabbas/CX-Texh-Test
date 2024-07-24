// Q#4: Write a function that will take an array as input and return an array with every missing
// element from 0 to the highest entry. For example, in an array [3,4,9,1,7,3,2,6] the highest
// entry is 9, and missing numbers are [0,5,8]


function findMissingNumbers(arr) {
    let max = Math.max(...arr);
    let presentNumbers = new Set(arr);
    let missingNumbers = [];

    for (let i = 0; i <= max; i++) {
        if (!presentNumbers.has(i)) {
            missingNumbers.push(i);
        }
    }

    return missingNumbers;
}

let arrayWithMissingNumbers = [3, 4, 9, 1, 7, 3, 2, 6];
let missingNumbers = findMissingNumbers(arrayWithMissingNumbers);
console.log(missingNumbers);