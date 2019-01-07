function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  var text = string.toUpperCase();
  console.log(text);
}

function logWhisper(string) {
  var text = string.toLowerCase();
  console.log(text);
}

function sayHiToGrandma(string) {
  if ( string === string.toLowerCase() ) {
  return "I can't hear you!";
} else if ( string === string.toUpperCase() ) {
  return "YES INDEED!";
} else
  if (  string === "I love you, Grandma." ) {
    return "I love you, too.";
  }
}
