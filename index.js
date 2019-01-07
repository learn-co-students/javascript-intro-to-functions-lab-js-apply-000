function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  return console.log(string.toUpperCase())
}
function logWhisper(string) {
  return console.log(string.toLowerCase())
}
function sayHiToGrandma(string) {
  var lowercase = string.toLowerCase()
  var uppercase = string.toUpperCase()
  var mixedCase = string
  if(string === lowercase){
     string = "I can't hear you!"
   }
  else if (string === uppercase ) {
    string = "YES INDEED!"
  }
  else if (string === mixedCase ) {
    string = "I love you, too."
  }
  return string
}
