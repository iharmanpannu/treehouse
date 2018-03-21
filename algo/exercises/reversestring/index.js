// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   return str
//     .split('')
//     .reverse()
//     .join('');
// }
// const reversed = reverse('Hello');
// console.log(reversed);

// function reverseWithConst(str) {
//   const arr = str.split('');
//   arr.reverse();
//   return arr.join('');
// }
// console.log(reverseWithConst('harman'));

function reverse(str) {
  let reversed = '';
  for (let character of str) {
    reversed = character + reversed;
  }
  return reversed;
}

console.log(reverse('help'));

// function reverse(str) {
//   return str
//     .split('')
//     .reduce((reversed, character) => character + reversed, '');
// }

// console.log(reverse('help'));

module.exports = reverse;
