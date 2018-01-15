function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  var uppercase = string.toUpperCase();
  var lowerCase = string.toLowerCase();
  switch (string) {
    case uppercase: return "YES INDEED!";
    case "I love you, Grandma.": return "I love you, too.";
      break;
    default: return "I can't hear you!";

  }
}
