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
  if('I love you, Grandma.' === string) {
    return 'I love you, too.';
  } else if (shout(string) === string) {
    return 'YES INDEED!';
  } else {
    return 'I can\'t hear you!';
  }
}
