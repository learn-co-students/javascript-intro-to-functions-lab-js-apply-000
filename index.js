function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  var shoutWord = string.toUpperCase();
  console.log(shoutWord);
}

function logWhisper(string) {
  var whisperWord = string.toLowerCase();
  console.log(whisperWord);
}

function sayHiToGrandma(string) {
  var lowercase = string.toLowerCase();
  if (string === lowercase) {
    return "I can't hear you!";
  }
  else if (string === "I love you, Grandma.") {
    return "I love you, too."
  }
  else {
    return "YES INDEED!"
  }
}
