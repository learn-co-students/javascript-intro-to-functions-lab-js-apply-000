function shout(s) {
  return s.toUpperCase();
}

function whisper(s) {
  return s.toLowerCase();
}

function logShout(s) {
  var upper = s.toUpperCase();
  console.log(upper);
}

function logWhisper(s) {
  var lower = s.toLowerCase();
  console.log(lower);
}

function sayHiToGrandma(s) {
  if (s.toLowerCase() === s) {
    return "I can't hear you!";
  } else if (s.toUpperCase() === s) {
    return "YES INDEED!";
  }
  else if (s === "I love you, Grandma.") {
    return "I love you, too.";
  }
}
