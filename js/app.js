'use strict';

let userName=prompt('What is your name?');
alert('Welcome '+userName);
let score=0;
let ansAge=prompt('Am I 30 years old?','yes or no');

function Q1(ansAge){
ansAge=ansAge.toLowerCase();
if (ansAge ==='no' || ansAge ==='n') {
  //console.log('This is right');
  alert('This is right');
  score=score+1;
} else if (ansAge ==='yes' || ansAge ==='y') {
  //console.log('No, not really');
  alert('No, not really');
} else{
  alert(`Hello ${userName}`);
}
}
Q1(ansAge);


let ansCity=prompt('Am I from Irbid?','yes or no');

function Q2(ansCity){
ansCity=ansCity.toLowerCase();
if (ansCity ==='yes' || ansCity ==='y') {
  //console.log('This is right');
  alert('This is right');
  score=score+1;
} else if (ansCity ==='no' || ansCity ==='n') {
  //console.log('No, not really');
  alert('No, not really');
} else{
  alert(`Hello ${userName}`);
}
}
Q2(ansCity);


let ansBcountry=prompt('Am I born in Jordan?','yes or no');

function Q3(ansBcountry){
ansBcountry=ansBcountry.toLowerCase();
if(ansBcountry ==='no' || ansBcountry ==='n') {
  //console.log('This is right');
  alert('This is right');
  score=score+1;
} else if(ansBcountry ==='yes' || ansBcountry ==='y'){
  //console.log('No, not really');
  alert('No, not really');
} else{
  alert(`Hello ${userName}`);
}
}
Q3(ansBcountry);


let ansColor=prompt('Is Blue my favorite color?');

function Q4(ansColor){
ansColor=ansColor.toUpperCase();
if (ansColor ==='YES' || ansColor==='Y') {
  //console.log('This is right');
  alert('This is right');
  score=score+1;
} else if (ansColor ==='NO' || ansColor==='N'){
  //console.log('No, not really');
  alert('No, not really');
} else{
  alert(`Hello ${userName}`);
}
}
Q4(ansColor);


let ansGrade=prompt('Did I graduate with weak grade from university?');

function Q5(ansGrade){
ansGrade=ansGrade.toLowerCase();
if (ansGrade ==='no' || ansGrade ==='n') {
  //console.log('This is right');
  alert('This is right');
  score=score+1;
} else if (ansGrade ==='yes' || ansGrade ==='y'){
  //console.log('No, not really');
  alert('No, not really');
} else{
  alert(`Hello ${userName}`);
}
}
Q5(ansGrade);


let myBirth=7;
let ansBirth=prompt('What is my birthday month?','enter a number');

function Q6(ansBirth){
for (let i = 0; i < 3; i++) {
  if (myBirth===parseInt(ansBirth)) {
    //console.log('This is right');
    alert('This is right');
    score=score+1;
    break;
  } else if (myBirth < parseInt(ansBirth)){
    ansBirth=prompt('too high');
    //console.log('too high');
  } else if (myBirth > parseInt(ansBirth)) {
    ansBirth=prompt('too low');
    //console.log('too low');
  }
  if (i===2 && (myBirth!==parseInt(ansBirth))) {
    alert(`Incorrect, the right answer is ${myBirth}`);
  }
}
}
Q6(ansBirth);


let y=false;
let myFilms=['animation','action','science fiction','comedy'];
let ansFilms=prompt('What is my favorite movies type?');
//console.log('start for');

function Q7(ansFilms){
for (let j = 0; j < 5; j++) {
  //console.log(j);
  for (let i = 0; i < myFilms.length; i++) {
    //console.log(i);
    if(ansFilms.toLowerCase() === myFilms[i]){
      alert('This is right');
      score=score+1;
      y = true;
    //console.log('22');
    }
  }
  if (y===true) {
    break;
  }
  ansFilms=prompt('incorrect, try again');
  //console.log(5);
}
}
Q7(ansFilms);

// let k=0;
// document.write('<h3> My favorite movies types </h3>');
// while (k<myFilms.length) {
//   document.writeln('<li>'+ myFilms[k]+'</li>'+'<br>');
//   k++;
// }

alert('My favorite movies type are '+myFilms);
alert(userName+', I hope you have fun with guessing game.');
alert(`your score is ${score} out of 7`);
