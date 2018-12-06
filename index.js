var uppercase = "HELLO!"
var lowercase = 'hello!'
var mixedCase = 'Hi there!'

function shout(string) {
  uppercase = string.toUpperCase();
  string = uppercase;
  return uppercase;
}

function whisper(string) {
  lowercase = string.toLowerCase();
  string = lowercase;
  return lowercase;
}
function logShout(string) {
  uppercase = string.toUpperCase();
  string = uppercase;
 return console.log(uppercase); 
}

function logWhisper(string) {
  lowercase = string.toLowerCase();
  string = lowercase;
  return console.log(lowercase);
}

function sayHiToGrandma(string) {
  if (string.toUpperCase() === string) {
    return "YES INDEED!";
  }
  if (string.toLowerCase() === string) {
    return 'I can\'t hear you!';
  }
  if (string === "I love you, Grandma.") {
    return "I love you, too.";
  }
}