// returns argument in all uppercase
function shout(string) {
  return string.toUpperCase();
}

// returns argument in all lowercase
function whisper(string) {
  return string.toLowerCase();
}

// logs argument in all uppercase
function logShout(string) {
  console.log(shout(string));
}

// logs argument in all lowercase
function logWhisper(string) {
  console.log(whisper(string));
}

// checks if argument is uppercase, lowercase, or 'I love you, Grandma' and
// returns appropriate string
function sayHiToGrandma(string) {
  if (string.toUpperCase() === string) {
    return "YES INDEED!";
  }
  else if (string.toLowerCase() === string) {
    return 'I can\'t hear you!';
  }
  else if (string === 'I love you, Grandma.') {
    return "I love you, too.";
  }
}
