'use strict';

let userName=prompt('What is your name?');
alert('Welcome '+userName);
let score=0;
let ansAge=prompt('Am I 30 years old?','yes or no');

function q1(ansAge){
  ansAge=ansAge.toLowerCase();
  if (ansAge ==='no' || ansAge ==='n') {
    alert('This is right');
    score=score+1;
  } else if (ansAge ==='yes' || ansAge ==='y') {
    alert('No, not really');
  } else{
    alert(`Hello ${userName}`);
  }
}
q1(ansAge);


let ansCity=prompt('Am I from Irbid?','yes or no');

function q2(ansCity){
  ansCity=ansCity.toLowerCase();
  if (ansCity ==='yes' || ansCity ==='y') {
    alert('This is right');
    score=score+1;
  } else if (ansCity ==='no' || ansCity ==='n') {
    alert('No, not really');
  } else{
    alert(`Hello ${userName}`);
  }
}
q2(ansCity);


let ansBcountry=prompt('Am I born in Jordan?','yes or no');

function q3(ansBcountry){
  ansBcountry=ansBcountry.toLowerCase();
  if(ansBcountry ==='no' || ansBcountry ==='n') {
    alert('This is right');
    score=score+1;
  } else if(ansBcountry ==='yes' || ansBcountry ==='y'){
    alert('No, not really');
  } else{
    alert(`Hello ${userName}`);
  }
}
q3(ansBcountry);


let ansColor=prompt('Is Blue my favorite color?');

function q4(ansColor){
  ansColor=ansColor.toUpperCase();
  if (ansColor ==='YES' || ansColor==='Y') {
    alert('This is right');
    score=score+1;
  } else if (ansColor ==='NO' || ansColor==='N'){
    alert('No, not really');
  } else{
    alert(`Hello ${userName}`);
  }
}
q4(ansColor);


let ansGrade=prompt('Did I graduate with weak grade from university?');

function q5(ansGrade){
  ansGrade=ansGrade.toLowerCase();
  if (ansGrade ==='no' || ansGrade ==='n') {
    alert('This is right');
    score=score+1;
  } else if (ansGrade ==='yes' || ansGrade ==='y'){
    alert('No, not really');
  } else{
    alert(`Hello ${userName}`);
  }
}
q5(ansGrade);


let myBirth=7;
let ansBirth;
function q6(ansBirth){
  for (let i = 0; i < 4; i++) {
    ansBirth=prompt('What is my birthday month?','enter a number');
    if (myBirth===parseInt(ansBirth)) {
      alert('This is right');
      score=score+1;
      break;
    } else if (myBirth < parseInt(ansBirth)){
      alert('too high');
    } else if (myBirth > parseInt(ansBirth)) {
      alert('too low');
    }
    if (i===3 && (myBirth!==parseInt(ansBirth))) {
      alert(`Incorrect, the right answer is ${myBirth}`);
    }
  }
}
q6(ansBirth);


let y=false;
let myFilms=['animation','action','science fiction','comedy'];
let ansFilms;
function q7(ansFilms){
  for (let j = 0; j < 6; j++) {
    ansFilms=prompt('What is my favorite movies type?');
    for (let i = 0; i < myFilms.length; i++) {
      if(ansFilms.toLowerCase() === myFilms[i]){
        alert('This is right');
        score=score+1;
        y = true;
      }
    }
    if (y) {
      break;
    }
    ansFilms=alert('incorrect, try again');
  }
}
q7(ansFilms);

alert('My favorite movies types are '+myFilms);
alert(userName+', I hope you have fun with guessing game.');
alert(`your score is ${score} out of 7`);
