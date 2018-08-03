function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  var printedString = string.toUpperCase();
  console.log(printedString);
}

function logWhisper(string) {
  var printedString = string.toLowerCase();
  console.log(printedString);
}

function sayHiToGrandma(string) {
  if(string.toUpperCase() === string) {
    return "YES INDEED!"
  } else if (string.toLowerCase() === string) {
    return "I can't hear you!"
  } else {
    return "I love you, too."
  }
}
