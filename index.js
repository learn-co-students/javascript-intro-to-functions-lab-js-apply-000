function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
  // three separate outputs depending on case
  let upperCase = string.toUpperCase();
  let lowerCase = string.toLowerCase();
  
  if (string === 'I love you, Grandma.') {
    return 'I love you, too.';
  }
  if (string === upperCase) {
    return 'YES INDEED!';
  }
  
  if (string === lowerCase) {
    return 'I can\'t hear you!';
  }
}

