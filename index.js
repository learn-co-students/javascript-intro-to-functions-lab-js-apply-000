function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  console.log(string.toUpperCase())
}

function logWhisper(string){
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string){
  var lowercase = "hello"
  string.toLowerCase() === lowercase
  return "I can\'t hear you!"

  // var uppercase = "HELLO"
  // var mixedCase = "I love you, Grandma."
  // string.toUpperCase() === uppercase
  // return "YES INDEED!"

  // if (string.toLowerCase() === lowercase) {
  //   return "I can\'t hear you!"
  // } else if (string.toUpperCase() === uppercase) {
  //   return "YES INDEED!"
  // } else if (string.toLowerCase() !== mixedCase && string.toUpperCase() !== mixedCase){
  //   return "I love you, too."
  // } else {
  //   return "say something!"
  // }
}

function sayHiToGrandma(string){
  var uppercase = "HELLO"
  string.toUpperCase() === uppercase
  return "YES INDEED!"
}
