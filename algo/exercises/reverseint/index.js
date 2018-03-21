// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const thisNumber = n
    .toString()
    .split('')
    .reverse()
    .join('');
  // works fine
  return parseInt(thisNumber) * Math.sign(n);
  //   if (thisNumber >= 0) {
  //     return parseInt(thisNumber);
  //   }
  //   {
  //     return parseInt(thisNumber) * -1;
  //   }
}

console.log(reverseInt(-309));
module.exports = reverseInt;
