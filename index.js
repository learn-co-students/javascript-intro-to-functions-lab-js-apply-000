function shout(string) {
  return string.toUpperCase();
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(s) {
  console.log(s.toUpperCase())
}
function logWhisper(s) {
  console.log(s.toLowerCase());
}
function sayHiToGrandma(s) {
  if (s.toLowerCase() === s) {
    return "I can\'t hear you!"
  } else if (s.toUpperCase() === s) {
    return 'YES INDEED!';
  } else if (s === 'I love you, Grandma.') {
    return 'I love you, too.';
  }
}
