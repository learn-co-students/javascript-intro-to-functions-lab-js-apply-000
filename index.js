function shout(string) {
  return string.toUpperCase()
}


function whisper(string) {
  return string.toLowerCase()
}


function logShout(string) {
  return console.log(string.toUpperCase());
}


function logWhisper(string) {
  return console.log(string.toLowerCase());
}


function sayHiToGrandma(string) {

  if (string === "I love you, Grandma." ) {
    return "I love you, too."

  } else {

    if (string === whisper(string)) {
      return "I can't hear you!"
    } else if (string === shout(string)) {
      return "YES INDEED!"
    } else {
      // Do nothing...
      // Grandma otherwise ignores "Mixed Case" normal volume?
    }
  }

}
