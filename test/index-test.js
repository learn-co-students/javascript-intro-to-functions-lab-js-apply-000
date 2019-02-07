
function shout(str) {
  return str.toUpperCase();
}

function whisper(str) {
  return str.toLowerCase();
}

function logShout(str) {
  console.log(str.toUpperCase());
}

function logWhisper(str) {
  console.log(str.toLowerCase());
}

function sayHiToGrandma(str) {
var answer = '';
  if(str === str.toLowerCase()) {
    answer = 'I can\'t hear you!';
  }
  else if(str === str.toUpperCase()) {
    answer = 'Yes Indeed!';
  }
  else if (str === 'I love you, Grandma.') {
    answer = 'I love you, too.'
  }
  return answer;
}