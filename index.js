function shout(string) {
  return string.toUpperCase();
}
function whisper(string) {
  return string.toLowerCase();
}
function logShout(string) {
  var Shout = string.toUpperCase();
  console.log(Shout);
}
function logWhisper(string) {
  var Whisper = string.toLowerCase();
  console.log(Whisper);
}
function sayHiToGrandma(string) {
  var GrandmaWhisper = string
  var GrandmaShout = string
  if (GrandmaWhisper.toLowerCase() === GrandmaWhisper) {
    return "I can't hear you!";
  }else if (GrandmaShout.toUpperCase() === GrandmaShout) {
    return "YES INDEED!";
  }else {
    return "I love you, too.";
  }
}