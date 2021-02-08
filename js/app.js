'use strict';

let ansAge=prompt('Am I 30 years old?','yes or no');
ansAge=ansAge.toLowerCase();
if (ansAge ==='no' || ansAge ==='n') {
  console.log('This is right');
  alert('This is right');
} else {
  console.log('No, not really');
  alert('No, not really');
}

let ansCity=prompt('Am I from Irbid?','yes or no');
ansCity=ansCity.toLowerCase();
if (ansCity ==='yes' || ansCity ==='y') {
  console.log('This is right');
  alert('This is right');
} else {
  console.log('No, not really');
  alert('No, not really');
}

let ansBcountry=prompt('Am I born in Jordan?','yes or no');
ansBcountry=ansBcountry.toLowerCase();
if(ansBcountry ==='no' || ansBcountry ==='n') {
  console.log('This is right');
  alert('This is right');
} else {
  console.log('No, not really');
  alert('No, not really');
}

let ansColor=prompt('Is Blue my favorite color?');
ansColor=ansColor.toUpperCase();
if (ansColor ==='YES' || ansColor==='Y') {
  console.log('This is right');
  alert('This is right');
} else {
  console.log('No, not really');
  alert('No, not really');
}

let ansGrade=prompt('Did I graduate with weak grade from university?');
ansGrade=ansGrade.toLowerCase();
if (ansGrade ==='no' || ansGrade ==='n') {
  console.log('This is right');
  alert('This is right');
} else {
  console.log('No, not really');
  alert('No, not really');
}

let userName=prompt('What is your name?');
alert('Welcome '+userName);
alert(userName+', I hope you have fun with guessing game.');
