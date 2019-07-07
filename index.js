function shout(string) { //define function "shout" and have it return the entered string in upper case characters.
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string){
  return console.log("HELLO")
}

function logWhisper(string){
  return console.log("hello")
}

// var sayHiToGrandma;
// if (string.toLowerCase() === string) {
//   sayHiToGrandma = function(string) {
//     return "I can\'t hear you!"
//   }
// }

function sayHiToGrandma(string) {
  var response;
  if (string.toLowerCase() === string) {
    response = "I can\'t hear you!"
  }
  if (string.toUpperCase() === string) {
    response = "YES INDEED!"
  }
  if (string === "I love you, Grandma.") {
    response = "I love you, too."
  }

  return response
}


// function sayHiToGrandma(string) {
//   var uppercase = 'YES INDEED!'
//   string.toUpperCase() === string
//   return uppercase
//
// }
