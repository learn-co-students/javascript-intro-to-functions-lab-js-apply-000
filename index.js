function shout(string) {
  return string.toUpperCase();
}
function whisper(string) {
  return string.toLowerCase();
}
function logShout(string) {
  console.log(string.toUpperCase());
}
function logWhisper(string) {
  console.log(string.toLowerCase());
}
var uppercase = "YES INDEED!"
 
uppercase.toUpperCase() === uppercase 
 
var lowercase = 'I can\'t hear you!'
 
lowercase.toLowerCase() === lowercase 
 
var mixedCase = 'Hi there!'
 
mixedCase.toLowerCase() === mixedCase 
 
mixedCase.toUpperCase() === mixedCase
function sayHiToGrandma(string) {
  var MessageToGrandma = string
  if (MessageToGrandma === MessageToGrandma.toLowerCase())
    return `${lowercase}`
  if (MessageToGrandma === MessageToGrandma.toUpperCase())
    return `YES INDEED!`
  if (string == 'I love you, Grandma.')
    return 'I love you, too.'
}