function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(shout(string))
}

function logWhisper(string) {
  console.log(whisper(string))
}

function sayHiToGrandma(string) {
  var retVal = "empty"
  
  if (string === "hello") {
    retVal = "I can't hear you!"
  }
  
  if (string === "HELLO") {
    retVal = "YES INDEED!"
  }
  
  if (string === "I love you, Grandma.") {
    retVal = "I love you, too."
  }
  
  return retVal;
}