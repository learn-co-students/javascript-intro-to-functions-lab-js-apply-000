function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(shout(string))
}

function logWhisper(string) {
  console.log(whisper(string))
}

function sayHiToGrandma(string) {
   var uppercase = shout(string)
   var lowercase = whisper(string)
   var justright = "I love you, Grandma."
   
    if (string === uppercase) {
    return "YES INDEED!"
    }
    else if (string === lowercase) {
    return "I can\'t hear you!"
    }
    else if (string === justright) {
      return "I love you, too."
    }    
  
}
