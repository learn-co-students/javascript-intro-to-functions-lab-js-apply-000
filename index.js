//make string all upper case
function shout(string) {
  return string.toUpperCase()
}
//make string all lower case
function whisper(string) {
  return string.toLowerCase()
}
//print string all upper case to console
function logShout(string) {
  var spy = string.toUpperCase()
  return console.log(spy)
}
//print string all lower case to console
function logWhisper(string) {
  var spy = string.toLowerCase()
  return console.log(spy)
}
//grandma is deaf or barely hearing
function sayHiToGrandma(string) {
  if(string === string.toLowerCase()) {
    return "I can't hear you!"
  }
  else if(string === string.toUpperCase()){
    return "YES INDEED!"
  }
  else if(string === "I love you, Grandma.") {
    return "I love you, too."
  }
}