function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string){
  console.log(string.toUpperCase())
}

function logWhisper(string){
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string){
  var lowerString = string.toLowerCase()
  var upperString = string.toUpperCase()
  
  if (string == lowerString){
  return "I can't hear you!"
  }
  
  if (string == upperString){
  return "YES INDEED!"
  }
  
  if (string != lowerString && upperString){
    return "I love you, too."
  }
  
  
}