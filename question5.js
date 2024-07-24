// Q#5: Write a function that will take an array of numbers and return the number most repeated
//     in the array with how many times it was repeated.For example, if the array is
//     [4, 3, 5, 6, 4, 7, 9, 2, 4, 6, 3, 4, 6, 3, 4, 8, 5, 1, 5] the function should return 4 is repeated 5 times.

function mostRepeatedNumber(arr) {
    let numCounts = {};
    let maxCount = 0;
    let mostRepeated = null;

    for (let num of arr) {
        if (numCounts[num]) {
            numCounts[num]++;
        } else {
            numCounts[num] = 1;
        }

        if (numCounts[num] > maxCount) {
            maxCount = numCounts[num];
            mostRepeated = num;
        }
    }

    return `${mostRepeated} is repeated ${maxCount} times`;
}

let arrayWithRepetitions = [4, 3, 5, 6, 4, 7, 9, 2, 4, 6, 3, 4, 6, 3, 4, 8, 5, 1, 5];
let mostRepeated = mostRepeatedNumber(arrayWithRepetitions);
console.log(mostRepeated); //