// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const characterMap = {};
  let max = 0;
  let maxChar = '';
  for (let character of str) {
    if (characterMap[character]) {
      characterMap[character]++;
    } else {
      characterMap[character] = 1;
    }
  }
  for (let character in characterMap) {
    if (characterMap[character] > max) {
      max = characterMap[character];
      maxChar = character;
    }
  }
  return maxChar;
}
console.log(maxChar('aasdfasdfasddddddd'));

module.exports = maxChar;
