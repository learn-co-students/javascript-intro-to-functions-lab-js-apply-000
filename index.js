function shout(string) {
  return string.toUpperCase();
}
shout("hello")

function whisper(string) {
  return string.toLowerCase();
}
whisper("HELLO")

function logShout(string) {
  console.log(string.toUpperCase());
}
logShout("hello")

function logWhisper(string) {
  console.log(string.toLowerCase());
}
logWhisper("Call ME")

function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) return "I can't hear you!";
  if (string.toUpperCase() === string) return "YES INDEED!";
  if (string === "I love you, Grandma.") return "I love you, too.";
}
