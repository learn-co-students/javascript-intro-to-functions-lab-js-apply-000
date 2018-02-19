function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  var string = 'hello';
  return string.toLowerCase();
}

function logShout(string) {
  var string = 'hello';
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  var string = 'hello';
  console.log(string.toLowerCase());
}

var string = 'I love you, Grandma.';
function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {
    return "I can't hear you!"
  } else if (string === string.toUpperCase()) {
    return "YES INDEED!"
  } else if (string === "I love you, Grandma.") {
    return "I love you, too."
  }
}
