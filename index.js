function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

var uppercase = "HELLO!";
uppercase.toUpperCase() === uppercase;
var lowercase = 'hello!';
loercase.toLowerCase() === lowercase;

function logShout(s) {
  console.log(shout(s))
}

function logWhisper(s) {
  console.log(whisper(s))
}

function sayHiToGrandma(s) {
  if (s === whisper(s)) {
  return "I can't hear you!";
} else if (s === shout(s)) {  
  return "YES INDEED!";
} else  if (s === "I love you, Grandma.") {
return "I love you, too.";
}
}


