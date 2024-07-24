// Q#2: Write a function that will take a string as input, check and return if it is palindrome or
// not.For example, if the string is “madam” the function should return true and if the string
// is “doctor” it should return false.


function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

let testString1 = "madam";
let testString2 = "doctor";

console.log(testString1 + " Palindrome -  " + isPalindrome(testString1));
console.log(testString2 + " Palindrome -  " + isPalindrome(testString2));