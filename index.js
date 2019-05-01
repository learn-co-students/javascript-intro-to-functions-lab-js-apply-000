function shout(string1) {
  return string1.toUpperCase()
}

function whisper(string2) {
  return string2.toLowerCase()
}

function logShout(string3) {
  console.log(string3.toUpperCase());
}

function logWhisper(string4) {
  console.log(string4.toLowerCase());
}

function sayHiToGrandma(string) {
  if (string === string.toLowerCase()){
    return 'I can\'t hear you!';
  } else if (string === string.toUpperCase()) {
    return 'YES INDEED!'
  } else if (string === 'I love you, Grandma.') {
    return 'I love you, too.'
  }
}
