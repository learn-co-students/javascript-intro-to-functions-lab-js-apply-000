function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase() 
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string){
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  var shouting = shout(string) 
  var whispering = whisper(string)
  
  if (shouting === string) {
    return "YES INDEED!"
  } else if (whispering === string) {
    return "I can't hear you!"
  } else {
    return "I love you, too."
  }
}