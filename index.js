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
  var loveString = "I love you, Grandma."

  if (string.toLowerCase() === string) {
    return "I can't hear you!";
  }
  if (string.toUpperCase() === string) {
    return "YES INDEED!";
  }
  if (string.toUpperCase() === loveString || string.toLowerCase() === loveString || string === loveString) {
    return "I love you, too."
  }
}
