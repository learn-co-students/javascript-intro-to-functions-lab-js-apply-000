function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase ()
}
function logShout(string) {
  string = "HELLO"
  console.log (string);
}
function logWhisper (string) {
  string = "hello"
  console.log (string)
}
function sayHiToGrandma (string) {
  if (string.toLowerCase() === string) {
    return "I can't hear you!";
  }
  else if (string.toUpperCase() === string) {
    return "YES INDEED!";
  }
  else if (string === "I love you, Grandma.") {
    return "I love you, too.";
}
}
