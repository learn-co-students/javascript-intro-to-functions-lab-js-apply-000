function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  var outString = string.toUpperCase();
  console.log(outString);
}

function logWhisper(string) {
  var outString = string.toLowerCase();
  console.log(outString);
}

function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
    return "I can\'t hear you!";
  } else if (string === "I love you, Grandma.") {
    return "I love you, too.";
  } else {
    return "YES INDEED!"
  }
}
