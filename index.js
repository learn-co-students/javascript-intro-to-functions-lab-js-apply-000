function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  return console.log(string.toUpperCase())
}

function logWhisper(sting) {
  return console.log(sting.toLowerCase())
}

function sayHiToGrandma(string) {
  let word = string ;
  if (word === string.toLowerCase() ){
    return "I can't hear you!"
  }
  
  else if (word === string.toUpperCase() ){
    return "YES INDEED!"
  }
    
  else if (word === "I love you, Grandma.") {
    return "I love you, too."
  }
  
  else {return }
  }
