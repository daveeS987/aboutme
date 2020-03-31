'use strict';

var userName = prompt('What is your name?');
console.log('userName :' + userName);
alert(userName + ', welcome to my site!');

var scoreCounter = 0;
var validAnswersArr = ['y', 'yes', 'no', 'n'];


// // Birth Home Question
// var myBirthHome = prompt(userName + ', am I from Houston?').toLowerCase();
// while(validAnswersArr.indexOf(myBirthHome) === -1) {
//   myBirthHome = prompt(userName + ', am I from Houston? Please answer with a yes or no').toLowerCase();
// }
// if (myBirthHome === 'yes' || myBirthHome === 'y') {
//   //console.log(userName + ', you are correct!');
//   scoreCounter++;
//   alert(userName + ', you are correct!');
// } else {
//   //console.log(userName + ', that is incorrect!');
//   alert(userName + ', that is incorrect!');
// }


// // Army Question
// var armyQuestion = prompt(userName + ', did I serve in the army?').toLowerCase();
// while(validAnswersArr.indexOf(armyQuestion) === -1) {
//   armyQuestion = prompt(userName + ', did I serve in the army? Please answer with a yes or no').toLowerCase();
// }
// if (armyQuestion === 'yes' || armyQuestion === 'y') {
//   //console.log(userName + ', you are correct!');
//   scoreCounter++;
//   alert(userName + ', you are correct!');
// } else {
//   //console.log(userName + ', that is incorrect!');
//   alert(userName + ', that is incorrect!');
// }


// // Kids Question
// var kidsQuestion = prompt(userName + ', do I have multiple kids?').toLowerCase();
// while(validAnswersArr.indexOf(kidsQuestion) === -1) {
//   kidsQuestion = prompt(userName + ', do I have multiple kids? Please answer with a yes or no').toLowerCase();
// }
// if (kidsQuestion === 'yes' || kidsQuestion === 'y') {
//   //console.log(userName + ', you are correct!');
//   scoreCounter++;
//   alert(userName + ', you are correct!');
// } else {
//   //console.log(userName + ', that is incorrect!');
//   alert(userName + ', that is incorrect!');
// }


// // Son question
// var sonQuestion = prompt(userName + ', did I name my son after a spartan king?').toLowerCase();
// while(validAnswersArr.indexOf(sonQuestion) === -1) {
//   sonQuestion = prompt(userName + ', did I name my son after a spartan king? Please answer with a yes or no').toLowerCase();
// }
// if (sonQuestion === 'yes' || sonQuestion === 'y') {
//   //console.log(userName + ', you are correct!');
//   scoreCounter++;
//   alert(userName + ', you are correct!');
// } else {
//   //console.log(userName + ', that is incorrect!');
//   alert(userName + ', that is incorrect!');
// }


// // BlackWater question
// var workQuestion = prompt(userName + ', did I work for a company named BlackWater?').toLowerCase();
// while(validAnswersArr.indexOf(workQuestion) === -1) {
//   workQuestion = prompt(userName + ', did I work for a company named BlackWater? Please answer with a yes or no').toLowerCase();
// }
// if (workQuestion === 'yes' || workQuestion === 'y') {
//   //console.log(userName + ', you are correct!');
//   scoreCounter++;
//   alert(userName + ', you are correct!');
// } else {
//   //console.log(userName + ', that is incorrect!');
//   alert(userName + ', that is incorrect!');
// }


// // Question 6: Numeric Question
// // For Loop Version
// var actualAnswer = 5;
// var userAnswer1;
// for (var attempts = 0; attempts < 4; attempts++) {
//   userAnswer1 = Number(prompt('How many years did I serve in the army?'));
//   if (userAnswer1 > actualAnswer) {
//     alert('That\'s too high');
//   } else if (userAnswer1 < actualAnswer) {
//     alert('That\'s too low');
//   } else if (userAnswer1 === actualAnswer) {
//     alert('That\'s correct!');
//     scoreCounter++;
//     break;
//   }
// }
// if (attempts === 4) {
//   alert(userName + ', the correct answer is 5!');
// }

///////////////////////////////////////////////////////////

// Question 6: Numeric Question
// While Loop Version

// var attemptsForQuestion6 = 0;
// var userAnswer;
// while (attemptsForQuestion6 < 4) {
//   userAnswer = Number(prompt(userName + ', how many years did I serve in the Army?'));
//   if (userAnswer > actualAnswer) {
//     alert(userName + ', that\'s too high!');
//   } else if (userAnswer < actualAnswer) {
//     alert(userName + ', that\'s too low!');
//   } else if (userAnswer === actualAnswer) {
//     alert(userName + ', that\'s correct!');
//     break;
//   }
//   attemptsForQuestion6++;
// }
// if (attemptsForQuestion6 === 4) {
//   alert(userName + ', the correct answer is 5!');
// }

//////////////////////////////////////////////////////////////////


// Question 7: Multiple Correct Answers
var correctAnswerArray = ['tesla', 'spacex', 'apple', 'google', 'amazon', 'microsoft', 'netflix'];

var attemptForQuestion7 = 0;
while (attemptForQuestion7 < 6) {
  var userAnswer7 = prompt(userName + ', what tech company do you think I would love to work for?').toLowerCase();
  for (var i = 0; i < correctAnswerArray.length; i++) {
    if (userAnswer7 === correctAnswerArray[i]) {
      alert('That is correct!!');
      attemptForQuestion7 = 5;
      scoreCounter++;
      break;
    }
  }
  if (attemptForQuestion7 < 5) {
    alert('Please try again');
  }
  attemptForQuestion7++;
}

if (attemptForQuestion7 === 6) {
  alert(userName + ', I would love to work for the following companies: SpaceX, Tesla, Amazon, Apple, Google, Microsoft, or Netflix');
}

alert(userName + ', you answered ' + scoreCounter + ' questions correctly');


