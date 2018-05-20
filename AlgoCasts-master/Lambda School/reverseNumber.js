// v1.0
function reverseNumber(num) {
  str = num.toString();
  let len = str.length;
  let reversed = "";
  for (let i = len; i > 0; i--) {
    reversed += str[i - 1];
  }
  result = Number(reversed);
  return result;
}

// // v2.0
// function reverseNumber (num) {
//   // console.log(num);
//   string = num.toString();
//   // console.log(string);
//   // console.log(typeof(string));
//   arr = string.split('');
//   // console.log(arr);
//   reverse = arr.reverse();
//   // console.log(reverse);
//   join = reverse.join('');
//   // console.log(join);
//   result = Number(join);
//   return result;
// }

// // v3.0 Number()
// function reverseNumber (num) {
//   return Number(num
//     .toString()
//     .split('')
//     .reverse()
//     .join(''));
// }

// // v4.0 parseInt()
// function reverseNumber(num) {
//   return parseInt(num
//     .toString()
//     .split('')
//     .reverse()
//     .join(''));
// }

// // v5.0 Arithmetic Operators *=, +=, -=, /= and % (modulo operator)
// function reverseNumber(num) {
//   let number = num;
//   let reversed = 0;
//   while (number !== 0) {
//     reversed *= 10;
//     reversed += number % 10;
//     number -= number % 10;
//     number /= 10;
//     // console.log(`reversed: ${reversed}, number: ${number}`);
//   }
//   return reversed;
// }
