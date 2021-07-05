function shout(string) {
  var loud = string.toUpperCase()
  return loud
}

function whisper(string) {
  var silent = string.toLowerCase()
  return silent
}

function logShout(string) {
  return console.log(string.toUpperCase());
}

function logWhisper(string) {
  return console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
  var lowerCase = string

  if (string.toLowerCase() === lowerCase) {
    return 'I can\'t hear you!'
  } if (string.toUpperCase() === lowerCase) {
    return "YES INDEED!"
  } if (string === "I love you, Grandma.") {
    return "I love you, too."
  }
}
