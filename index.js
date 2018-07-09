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


  

function sayHitoGrandma(string) {
  
  var uppercase = "HELLO"
  var lowercase = "hello"
  var mixedCase = "I love you, Grandma."
  
  uppercase.toUpperCase() === uppercase // true
  lowercase.toLowerCase() === lowercase // true
  mixedCase.toLowerCase() === mixedCase // false
  mixedCase.toUpperCase() === mixedCase // false
 
 
}