function shout(string) {
    return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  var shout = string.toUpperCase()
  console.log(shout)
}

function logWhisper(string) {
  var whisper = string.toLowerCase()
  console.log(whisper)
}

function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
  return ("I can\'t hear you!") }
  if (string.toUpperCase() === string) {
    return ("YES INDEED!")}
  else {
    return ("I love you, too.")
  }
}
