function print(message) {
  document.write(message);
}

function askQuestion(answers) {
  let questions = [
  ['President Of USA? '],
  ['Last name of Barrack? ']
];
  let firstQuestion =  questions[0][0];
  // let secondQuestion = prompt(questions[1][0]);

  if (prompt(firstQuestion) === 'trump' || 'me') {
    console.log(`<p>You answer is right!</p>`);
  } else {
    console.log(`<p>Wrong! Try Again</p>`);
  }
}
askQuestion();
