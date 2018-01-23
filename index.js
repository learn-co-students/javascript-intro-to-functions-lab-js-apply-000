function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(shout(string));
}

function logWhisper(string) {
  console.log(whisper(string))
}

function sayHiToGrandma(string) {
  var lower = whisper(string);
  if (string === lower)
      return "I can't hear you!";
  var upper = shout(string);
  if (string === upper)
    return "YES INDEED!";
  if (string === "I love you, Grandma.")
    return "I love you, too.";
}
