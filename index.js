function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(shout('hello'))
}

function logWhisper(string) {
  console.log(whisper('hello'))
}

function sayHiToGrandma(string) {
  
  var uppercase = "HELLO"
  var lowercase = "hello"
  var mixedCase = "I love you, Grandma."
  
  console.log(uppercase.toUpperCase() === uppercase, "YES INDEED!")
  
  console.log(lowercase.toLowerCase() === lowercase, "I can't hear you!")
  
  console.log(mixedCase.toLowerCase() === mixedCase & mixedCase.toUpperCase() === mixedCase, "I love you, too.")
  
}