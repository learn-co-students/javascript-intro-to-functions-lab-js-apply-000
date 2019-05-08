function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {
    return "I can't hear you!";
}
else if (string === string.toUpperCase()) {
    return "YES INDEED!";
} else if (string = 'I love you, Grandma.') {
  return 'I love you, too.'
}
}

function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

var string = 'hello';
function logShout(string) {
  return string.toUpperCase();
  console.log(string);
}

var string = 'HELLO';
function logWhisper(string){
  return string.toLowerCase();
  //console.log(logWhisper);
  console.log(string);
  }
