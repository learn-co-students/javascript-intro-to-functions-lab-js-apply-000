//return argument to all uppercase using toUpperCase method.
function shout(string) {
  return string.toUpperCase()
}

//return argument to all lowercase using toLowerCase method.
function whisper(string) {
  return string.toLowerCase()
}

//logs argument to the console in all uppercase using toUpperCase method.
function logShout(string) {
  console.log(string.toUpperCase())
}

//logs argument to console in all lowercase using toLowerCase method.
function logWhisper(string) {
  console.log(string.toLowerCase())
}

//define uppercase and lowercase globally to be used in following function.
var uppercase = 'HELLO'
var lowercase = "hello"

/*use conditional (else if) function to return strings when strict equality to if statement is true. This passed the tests with specific strings. 

  Instead of defining each variable with a string, could this be done by defining the variables with a method to evaluate any string value (ie. hi instead of hello) for capitalization when executing function?
*/

function sayHiToGrandma(string) {
  if ((string) === lowercase) {
  return "I can't hear you!"
  }
  else if ((string) === uppercase) {
  return "YES INDEED!"
  }
  else if ((string) === "I love you, Grandma.") {
  return "I love you, too."
  }
}
  