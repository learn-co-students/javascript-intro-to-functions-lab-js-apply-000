function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  var newStr = string.toUpperCase();
  
  console.log(newStr);
}

function logWhisper(string) {
  var newStr = string.toLowerCase();
  
  console.log(newStr);
}

function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {
    return `I can't hear you!`;
  } else if (string === string.toUpperCase()) {
    return 'YES INDEED!';
  } else if (string === 'I love you, Grandma.') {
    return 'I love you, too.';
  }
}
