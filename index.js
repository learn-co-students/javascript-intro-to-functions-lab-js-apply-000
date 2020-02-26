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

function sayHiToGrandma(greeting) {
  // compare greeting with greeting in all uppercase
  if (greeting === "I love you, Grandma.") {
      return "I love you, too.";
  // otherwise if greeting is all uppercase compare to greeting if true return
  } else if (shout(greeting) === greeting) {
      return "YES INDEED!";
  // otherwise if greeting is all lowercase return
  } else if (whisper(greeting) === greeting) {
      return "I can't hear you!";
  }
}
