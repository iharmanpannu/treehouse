enum color {
  Red,
  Green,
  Blue
}

let background = color.Blue;
let message;
message = 'abc';
let endswith = (message as string).endsWith('c');
console.log(endswith);
let log = function(message) {
  console.log(message);
};

let doLog = message => console.log(message);
doLog('hello');
