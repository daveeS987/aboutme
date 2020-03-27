'use strict';

var userName = prompt('What is your name?');
console.log('userName :' + userName);
alert(userName + ', welcome to my site!');

var validAnswersArr = ['y', 'yes', 'no', 'n'];

// Birth Home Question
var myBirthHome = prompt(userName + ', am I from Houston?').toLowerCase();
while(validAnswersArr.indexOf(myBirthHome) === -1) {
  myBirthHome = prompt(userName + ', am I from Houston? Please answer with a yes or no').toLowerCase();
}
if (myBirthHome === 'yes' || myBirthHome === 'y') {
  //console.log(userName + ', you are correct!');
  alert(userName + ', you are correct!');
} else {
  //console.log(userName + ', that is incorrect!');
  alert(userName + ', that is incorrect!');
}

// Army Question
var armyQuestion = prompt(userName + ', did I serve in the army?').toLowerCase();
while(validAnswersArr.indexOf(armyQuestion) === -1) {
  armyQuestion = prompt(userName + ', did I serve in the army? Please answer with a yes or no').toLowerCase();
}
if (armyQuestion === 'yes' || armyQuestion === 'y') {
  //console.log(userName + ', you are correct!');
  alert(userName + ', you are correct!');
} else {
  //console.log(userName + ', that is incorrect!');
  alert(userName + ', that is incorrect!');
}

// Kids Question
var kidsQuestion = prompt(userName + ', do I have two kids?').toLowerCase();
while(validAnswersArr.indexOf(kidsQuestion) === -1) {
  kidsQuestion = prompt(userName + ', do I have two kids? Please answer with a yes or no').toLowerCase();
}
if (kidsQuestion === 'yes' || kidsQuestion === 'y') {
  //console.log(userName + ', you are correct!');
  alert(userName + ', you are correct!');
} else {
  //console.log(userName + ', that is incorrect!');
  alert(userName + ', that is incorrect!');
}

// Son question
var sonQuestion = prompt(userName + ', is my son 2 years old?').toLowerCase();
while(validAnswersArr.indexOf(sonQuestion) === -1) {
  sonQuestion = prompt(userName + ', is my son 2 years old? Please answer with a yes or no').toLowerCase();
}
if (sonQuestion === 'yes' || sonQuestion === 'y') {
  //console.log(userName + ', you are correct!');
  alert(userName + ', you are correct!');
} else {
  //console.log(userName + ', that is incorrect!');
  alert(userName + ', that is incorrect!');
}

// BlackWater question
var workQuestion = prompt(userName + ', did I work for a company named BlackWater?').toLowerCase();
while(validAnswersArr.indexOf(workQuestion) === -1) {
  workQuestion = prompt(userName + ', did I work for a company named BlackWater? Please answer with a yes or no').toLowerCase();
}
if (workQuestion === 'yes' || workQuestion === 'y') {
  //console.log(userName + ', you are correct!');
  alert(userName + ', you are correct!');
} else {
  //console.log(userName + ', that is incorrect!');
  alert(userName + ', that is incorrect!');
}
