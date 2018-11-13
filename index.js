function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  var a = string.toUpperCase();
  console.log(a);
}

function logWhisper(string) {
  var b = string.toLowerCase();
  console.log(b);
}

function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {
    return "I can\'t hear you!";
  } else if (string === string.toUpperCase()) {
    return "YES INDEED!";
  } else if (string === "I love you, Grandma.") {
    return "I love you, too.";
  }
}
