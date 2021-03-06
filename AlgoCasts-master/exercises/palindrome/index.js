// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//me

// function palindrome(str) {
//     const reversed = str.split('').reverse().join('');

//     if (reversed === str) {
//         return true;
//     }
//     return false;
// }

//First Solution
// function palindrome(str) {
//     const reversed = str.split('').reverse().join('');
//     return reversed === str;
// }

//Second Solution with every function
function palindrome(str) {
  return str.split("").every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

module.exports = palindrome;
