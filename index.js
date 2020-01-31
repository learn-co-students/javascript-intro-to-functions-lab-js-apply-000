var upperCase = 'HELLO';
var lowerCase = 'hello';

function shout(string) {
  return string.toUpperCase();
}
function whisper(string) {
  return string.toLowerCase();
}
function logShout(string) {
  console.log(upperCase);
}
function logWhisper(string) {
  console.log(lowerCase);
}
function sayHiToGrandma(string) {
  if (string === lowerCase) {
    return "I can't hear you!";
  }
  else if (string === upperCase) {
    return "YES INDEED!";
  }
  else if (string === "I love you, Grandma.") {
    return "I love you, too.";
  }
}