function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function sayHiToGrandma(string) {
  var maybeLowerCaseString = string.toLowerCase()
  var maybeUpperCaseString = string.toUpperCase()
  if (maybeLowerCaseString === string) {
    return "I can't hear you!"
  }
  if (maybeUpperCaseString === string) {
    return "YES INDEED!"
  }
  else {
    return "I love you, too."
  }
}
function logShout(string) {
  
  console.log(string.toUpperCase())
}
function logWhisper(string) {
  console.log(string.toLowerCase())
}