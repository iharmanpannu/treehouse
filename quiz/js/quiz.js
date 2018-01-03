function print(message) {
  document.write(message);
}

var questions = [
  ['How is your day going so far '],
  ['How old are you? ']
];

function askQuestion() {
  prompt(questions[0][0]);
  prompt(questions[1][0]);
}

console.log('Hello');