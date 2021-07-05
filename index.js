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

function sayHiToGrandma(string) { //Define a function "sayHiToGrandma"
  var response; //define the "response" variable so we can modify it depending on certain conditions
  if (string.toLowerCase() === string) { //if the string is lowercase, set response to "I can't hear you"
    response = "I can\'t hear you!"
  }
  if (string.toUpperCase() === string) { //if the string is Uppercase, set the response variable to "YES INDEED!"
    response = "YES INDEED!"
  }
  if (string === "I love you, Grandma.") { //If the string is "I love you, Grandma" set the response variable to "I love you, too."
    response = "I love you, too."
  }

  return response //Return response
}


// function sayHiToGrandma(string) {
//   var uppercase = 'YES INDEED!'
//   string.toUpperCase() === string
//   return uppercase
//
// }
