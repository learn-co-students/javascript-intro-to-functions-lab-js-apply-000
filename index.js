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
  uppercase.toUpperCase() === uppercase // true
  var lowercase = "hello"
  lowercase.toLowerCase() === lowercase // true
  var mixedCase = "I love you, Grandma."
  mixedCase.toLowerCase() === mixedCase // false
  mixedCase.toUpperCase() === mixedCase // false
  
  console.log(lowercase)
  return lowercase.toLowerCase("I can't hear you!")
  
  console.log(uppercase)
  return uppercase.toUpperCase("YES, INDEED!")
  
  console.log(mixedCase)
  return "I love you, too."
  
}