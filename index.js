function shout(text) {
  return text.toUpperCase();
}

function whisper(text) {
  return text.toLowerCase();
}

function logShout(text) {
  let upperCased = shout(text);
  console.log(upperCased);
}

function logWhisper(text) {
  let lowerCased = whisper(text);
  console.log(lowerCased);
}

function sayHiToGrandma(text) {
  if (text === text.toLowerCase()) {
    return 'I can\'t hear you!';
  }
  if (text === text.toUpperCase()) {
    return 'YES INDEED!';
  }
  if (text === 'I love you, Grandma.') {
    return 'I love you, too.';
  }
  else {
    return false;
  }
}