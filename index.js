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
  var grandmaResponse
  if (string.toLowerCase() === "i love you, grandma.") {
    grandmaResponse = "I love you, too."
  } else if (string.toUpperCase() === string) {
    grandmaResponse = "YES INDEED!"
  } else {
    grandmaResponse = "I can't hear you!"
  }
  return grandmaResponse
}
