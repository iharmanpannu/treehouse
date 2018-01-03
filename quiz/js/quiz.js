function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

var questions = [
  ['President Of USA? '],
  ['Last name of Barrack? '],
  ['National animal of India?'],
  ['trump', 'obama', 'tiger']
];

var correctAnswer = 0;
var question;
var answers;
var html;
var response;
var wrong;

for (var i = 0; i < questions.length; i++) {
  question = prompt(questions[i][0]);
  answers = question[i][3];
  response = question;
  if (question === answers) {
    correctAnswer++;
  }
}

document.getElementById('para');
html = `You got ${correctAnswer} questions right! `

print(html);
