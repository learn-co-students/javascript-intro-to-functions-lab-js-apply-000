function shout(string) {
  return string.toUpperCase();
}

function whisper(str) {
  return str.toLowerCase();
}

function logShout(str) {
  console.log(shout(str));
}

function logWhisper(str) {
  console.log(whisper(str));
}

function sayHiToGrandma(string) {
  if (string === "I love you, Grandma.") {
    return "I love you, too.";
  }
  if (string !== string.toUpperCase()) {
    return "I can\'t hear you!";
  }
  if (string === string.toUpperCase()) {
    return "YES INDEED!";
  }
}
