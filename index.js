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

function sayHiToGrandma(string) {
  let conditionalString = "I love you, Grandma.";
  
  if (string === string.toLowerCase()) {
    return "I can't hear you!";
  }
  else if (string === string.toUpperCase()) {
    return "YES INDEED!";
  }
  else if (string === conditionalString) {
    return "I love you, too.";
  }
}