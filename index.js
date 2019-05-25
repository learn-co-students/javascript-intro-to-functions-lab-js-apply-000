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
var lowercase = "hello"
var uppercase = "HELLO" 
//var greeting ="I love you, Grandma."

function sayHiToGrandma(text) {  
 
  var lowercase = text.toLowerCase()
  var uppercase = text.toUpperCase()
  if (text === lowercase) {
  return "I can't hear you!"
}
  
  else if (uppercase === text) {
  return "YES INDEED!"
  }
  
  else {
  return "I love you, too."
}
}


/*
function sayHiToGrandma(string) {
  //var uppercase = "HELLO"
  var uppercase = string.toUpperCase()
  if (uppercase === uppercase.toUpperCase())
  return "YES INDEED!"
}
*/


