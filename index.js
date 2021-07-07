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

// sayHiToGrandma code 

 var uppercase = "HELLO"
  uppercase.toUpperCase() === uppercase // true
  var lowercase = "hello"
  lowercase.toLowerCase() === lowercase // true
  var mixedCase = "I love you, Grandma."
  mixedCase.toLowerCase() === mixedCase // false
  mixedCase.toUpperCase() === mixedCase // false

function sayHiToGrandma(string) {
  
 if (string === lowercase.toLowerCase()) {
  return "I can't hear you!"}
  else if (string === uppercase.toUpperCase()) {
  return "YES INDEED!"}
  else if (mixedCase) {
    return "I love you, too."}
}