function shout(string) {
  var upperStr = string.toUpperCase();
  return upperStr;
}
function whisper(string) {
  var lowerStr = string.toLowerCase();
  return lowerStr;
}
function logWhisper(string) {
  console.log(string.toLowerCase());
}
function logShout(string) {
  console.log(string.toUpperCase());
}

function sayHiToGrandma(string) {
  if (string === "I love you, Grandma.") {
    return "I love you, too."
  } else if (string === string.toLowerCase()) {
    return "I can't hear you!";
  } else if (string === string.toUpperCase()) {
    return "YES INDEED!"

  }
}
