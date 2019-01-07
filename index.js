function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
  var lowerCase = string.toLowerCase();
  var upperCase = string.toUpperCase();

  if(string === lowerCase) {
    return "I can't hear you!";
  }
  if(string === upperCase){
    return "YES INDEED!";
  }
  if(string === "I love you, Grandma.") {
    return "I love you, too."
  }
}
