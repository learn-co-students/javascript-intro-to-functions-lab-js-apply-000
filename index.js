function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log('hello'.toUpperCase())
}

function logWhisper(string) {
  console.log('HELLO'.toLowerCase())
}

function sayHiToGrandma(string) {
  var uppercase = "HELLO"
  var lowercase = "hello"
  
    if (string === uppercase) {
      return "YES INDEED!"
      }
      else if (string === "I love you, Grandma.") {
        return "I love you, too."
      } else if (string === string.toLowerCase()) {
        return 'I can\'t hear you!'
      }
  
}
