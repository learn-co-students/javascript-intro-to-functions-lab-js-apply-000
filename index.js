function shout (string){
  return string.toUpperCase()
}
function whisper(string){
  return string.toLowerCase()
}
function logShout(string){
  console.log (string.toUpperCase())
}
function logWhisper(string){
  console.log (string.toLowerCase())
}
  var lowercase = 'hello'
  var uppercase = 'HELLO'
  var mixedCase = 'I love you, Grandma.'
  function sayHiToGrandma (string){
    if (string === mixedCase) return ("I love you, too.")
    if(string === whisper(string)) return ("I can't hear you!")
    if (string === shout(string)) return ("YES INDEED!")}
