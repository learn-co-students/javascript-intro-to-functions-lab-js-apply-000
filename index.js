function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(shout(string));
}

function logWhisper(string) {
  console.log(whisper(string));
}

function sayHiToGrandma(string) {
  
  var isLower = string.toLowerCase() === string;
  var isUpper = string.toUpperCase() === string;

  if (isLower) {
    return "I can't hear you!";
  }
  if (isUpper) {
    return "YES INDEED!";
  }
  if (string === 'I love you, Grandma.') {
    return 'I love you, too.';
  }

}
