// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/* Reverse helper function

function reverse(str) {
    const arr = str.split('');
    return arr.reverse().join('');
}

*/

/* Reverse helper solution cleaned up

function reverse(str) {
    return str.split('').reverse().join('');
}

*/

/* For loop solution with ES6 for loop syntax

function reverse(str) {
  let reversed = "";

  for (let character of str) {
    reversed = character + reversed;
  }
  return reversed;
}

*/

// Using reduce helper and this can wow interviewer because more complex with ES6 syntax

function reverse(str) {
  return str.split("").reduce((rev, char) => char + rev, "");
}

module.exports = reverse;
