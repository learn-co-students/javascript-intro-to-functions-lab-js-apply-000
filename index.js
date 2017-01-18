function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {
    var str = "I can't hear you!"
  } else if (string === string.toUpperCase()) {
    var str = "YES INDEED!"
  } else if (string === "I love you, Granndma.") {
    var str = "I love you, too.";
  }
  return str;
}
