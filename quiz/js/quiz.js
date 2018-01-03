function print(message) {
  document.write(message);
}


var questions = [
  ['President Of USA? ', 'trump'],
  ['Last name of Barrack? ', 'obama']
  ['National animal of India? ','tiger']
];

var correctAnswer = 0;
var question;
var answers;
var html;
var response;

for ( var i = 0; i < questions.length; i++ ) {
  question = prompt(questions[i][0]);
  answers = questions[i][1];
  response = prompt(question);
  if ( question === answers ) {
    correctAnswer++;
  }
}

html = `You got ${correctAnswer} ${question} right! `
print(html);