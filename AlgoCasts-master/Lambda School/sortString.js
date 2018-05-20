// v1.0
function sortString(str) {
  const arr = str.split("");
  const sorted = arr.sort();
  const joined = sorted.join("");
  return joined;
}

// // v2.0
// function sortString(str) {
//   return str.split('').sort().join('');
// }

// // v3.0
// // There's gotta be a better way than this!
// // NOTE: like above this sorts ALL UPPERCASE before lowercase
// function sortString(str) {
//   let alpha = {
//     'A': 0,
//     'B': 0,
//     'C': 0,
//     'D': 0,
//     'E': 0,
//     'F': 0,
//     'G': 0,
//     'H': 0,
//     'I': 0,
//     'J': 0,
//     'K': 0,
//     'L': 0,
//     'M': 0,
//     'N': 0,
//     'O': 0,
//     'P': 0,
//     'Q': 0,
//     'R': 0,
//     'S': 0,
//     'T': 0,
//     'U': 0,
//     'V': 0,
//     'W': 0,
//     'X': 0,
//     'Y': 0,
//     'Z': 0,
//     'a': 0,
//     'b': 0,
//     'c': 0,
//     'd': 0,
//     'e': 0,
//     'f': 0,
//     'g': 0,
//     'h': 0,
//     'i': 0,
//     'j': 0,
//     'k': 0,
//     'l': 0,
//     'm': 0,
//     'n': 0,
//     'o': 0,
//     'p': 0,
//     'q': 0,
//     'r': 0,
//     's': 0,
//     't': 0,
//     'u': 0,
//     'v': 0,
//     'w': 0,
//     'x': 0,
//     'y': 0,
//     'z': 0
//   };
//   let strArr = [];
//   let sortedString = '';
//   for(i = 0; i < str.length; i++) {
//     strArr.push(str.charAt(i));
//   }
//   for(i = 0; i < strArr.length; i++) {
//     if (strArr[i] === 'A') alpha[strArr[i]]++;
//     if (strArr[i] === 'a') alpha[strArr[i]]++;
//     if (strArr[i] === 'B') alpha[strArr[i]]++;
//     if (strArr[i] === 'b') alpha[strArr[i]]++;
//     if (strArr[i] === 'C') alpha[strArr[i]]++;
//     if (strArr[i] === 'c') alpha[strArr[i]]++;
//     if (strArr[i] === 'D') alpha[strArr[i]]++;
//     if (strArr[i] === 'd') alpha[strArr[i]]++;
//     if (strArr[i] === 'E') alpha[strArr[i]]++;
//     if (strArr[i] === 'e') alpha[strArr[i]]++;
//     if (strArr[i] === 'F') alpha[strArr[i]]++;
//     if (strArr[i] === 'f') alpha[strArr[i]]++;
//     if (strArr[i] === 'G') alpha[strArr[i]]++;
//     if (strArr[i] === 'g') alpha[strArr[i]]++;
//     if (strArr[i] === 'H') alpha[strArr[i]]++;
//     if (strArr[i] === 'h') alpha[strArr[i]]++;
//     if (strArr[i] === 'I') alpha[strArr[i]]++;
//     if (strArr[i] === 'i') alpha[strArr[i]]++;
//     if (strArr[i] === 'J') alpha[strArr[i]]++;
//     if (strArr[i] === 'j') alpha[strArr[i]]++;
//     if (strArr[i] === 'K') alpha[strArr[i]]++;
//     if (strArr[i] === 'k') alpha[strArr[i]]++;
//     if (strArr[i] === 'L') alpha[strArr[i]]++;
//     if (strArr[i] === 'l') alpha[strArr[i]]++;
//     if (strArr[i] === 'M') alpha[strArr[i]]++;
//     if (strArr[i] === 'm') alpha[strArr[i]]++;
//     if (strArr[i] === 'N') alpha[strArr[i]]++;
//     if (strArr[i] === 'n') alpha[strArr[i]]++;
//     if (strArr[i] === 'O') alpha[strArr[i]]++;
//     if (strArr[i] === 'o') alpha[strArr[i]]++;
//     if (strArr[i] === 'P') alpha[strArr[i]]++;
//     if (strArr[i] === 'p') alpha[strArr[i]]++;
//     if (strArr[i] === 'Q') alpha[strArr[i]]++;
//     if (strArr[i] === 'q') alpha[strArr[i]]++;
//     if (strArr[i] === 'R') alpha[strArr[i]]++;
//     if (strArr[i] === 'r') alpha[strArr[i]]++;
//     if (strArr[i] === 'S') alpha[strArr[i]]++;
//     if (strArr[i] === 's') alpha[strArr[i]]++;
//     if (strArr[i] === 'T') alpha[strArr[i]]++;
//     if (strArr[i] === 't') alpha[strArr[i]]++;
//     if (strArr[i] === 'U') alpha[strArr[i]]++;
//     if (strArr[i] === 'u') alpha[strArr[i]]++;
//     if (strArr[i] === 'V') alpha[strArr[i]]++;
//     if (strArr[i] === 'v') alpha[strArr[i]]++;
//     if (strArr[i] === 'W') alpha[strArr[i]]++;
//     if (strArr[i] === 'w') alpha[strArr[i]]++;
//     if (strArr[i] === 'X') alpha[strArr[i]]++;
//     if (strArr[i] === 'x') alpha[strArr[i]]++;
//     if (strArr[i] === 'Y') alpha[strArr[i]]++;
//     if (strArr[i] === 'y') alpha[strArr[i]]++;
//     if (strArr[i] === 'Z') alpha[strArr[i]]++;
//     if (strArr[i] === 'z') alpha[strArr[i]]++;
//   }
//   keys = Object.keys(alpha);
//   // console.log(keys);
//   for(i = 0; i < keys.length; i++) {
//     for (j = 0; j < alpha[keys[i]]; j++) {
//       sortedString = sortedString + keys[i];
//     }
//   }
//   return sortedString;
// }

console.log(sortString("AzycxbCwBaA")); // <--- AABCabcwxyz
console.log(sortString("azycxbcwbaa")); // <--- aaabbccwxyz
