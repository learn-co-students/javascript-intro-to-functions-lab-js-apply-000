function shout(randString) {
  return randString.toUpperCase();
}

function whisper(randString) {
  return randString.toLowerCase();
}

function logShout(randString) {
  console.log(randString.toUpperCase());
}

function logWhisper(randString) {
  console.log(randString.toLowerCase());
}

function sayHiToGrandma(randString) {
  if (randString.toLowerCase() === randString) {
    return "I can't hear you!";
  }
  else if (randString.toUpperCase() === randString) {
    return "YES INDEED!";
  }
  else if (randString == "I love you, Grandma.") {
    return "I love you, too."
  }
}