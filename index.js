function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  var upperstring = string.toUpperCase()
  var lowerstring = string.toLowerCase()
  if (upperstring === string) {
    return "YES INDEED!"
  }
  else if (lowerstring === string) {
    return "I can't hear you!"
  }
  else if (string === "I love you, Grandma.") {
    return "I love you, too."
  }
  }
