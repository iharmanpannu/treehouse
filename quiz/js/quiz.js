function print(message) {
  document.write(message);
}

function askQuestion(answers) {
  let questions = [
  ['President Of USA? '],
  ['Last name of Barrack? ']
  ['National animal of India? ']
];
  let firstQuestion =  questions[0][0];
  let secondQuestion = questions[1][0];
  let thirdQuestion = questions[2][0];

  if (prompt(firstQuestion) === ('trump' || 'Trump')) {
    console.log(`<p>You answer is right!</p>`);
  } else {
    console.log(`<p>Wrong! Try Again</p>`);
  }

  if (prompt(secondQuestion) === "obama") {
    console.log(`<p>You answer is right!</p>`);
  } else {
    console.log(`<p>Wrong! Try Again</p>`);
  }
  
}
askQuestion();
