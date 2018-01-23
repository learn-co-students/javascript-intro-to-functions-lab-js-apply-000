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
  var normalString = string
  var lowerString = string.toLowerCase();
  var upperString = string.toUpperCase();
  if (lowerString === normalString) {
    return "I can't hear you!"
  }
  if (upperString === normalString) {
    return "YES INDEED!"
  }
  if (string === "I love you, Grandma.") {
    return "I love you, too."
  }
}
