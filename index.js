function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  let f = shout(string);
  console.log(f);
}

function logWhisper(string) {
  let f = whisper(string);
  console.log(f);
}

function sayHiToGrandma(string) {
  let big = shout(string);
  let small = whisper(string);
  if (string == "I love you, Grandma.")
    return "I love you, too.";
  else if (string == big)
    return "YES INDEED!";
  else if (string == small)
    return "I can\'t hear you!";
}
