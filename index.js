var string = 'Hello'
var upperCase = 'I LOVE YOU, GRANDMA'
  // upperCase.toUpperCase() === uppercase; True
var lowerCase = 'i love you, grandma'
  //lowerCase.toLowerCase() = lowercase; True
var mixedCase = 'I love you, Grandma'
  // mixedCase.toLowerCase() === mixedCase; False
  // mixedCase.toUpperCase() === mixedCase; False


function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string){
  if (string === string.toLowerCase()){
    return "I can't hear you!" } else {
      if (string === string.toUpperCase()){
        return "YES INDEED!"} else
          return "I love you, too."
      }
    }
