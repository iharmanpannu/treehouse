// console.log(3 === 3 && "cow" && false);
// console.log(3 === 3 || "cow");

// function isAdult(age) {
//   return age && age >= 18;
// }
// console.log(isAdult(20));

function countToFive(start) {
  start = start || 1;
  for (let i = start; i < 5; i += 1) {
    console.log(i);
  }
}
countToFive(0);
