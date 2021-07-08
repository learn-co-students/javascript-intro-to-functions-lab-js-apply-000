function shout (string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  return console.log(string.toUpperCase())
}

function logWhisper (string) {
  return console.log(string.toLowerCase())
}

let uppercase = "HELLO"
let lowercase = "hello"
let mixedcase = "I love you, Grandma."

function sayHiToGrandma(string){
  if (string === lowercase){
    return "I can't hear you!"
  } else if (string === uppercase){
    return "YES INDEED!"
  } else if(string === mixedcase){
    return "I love you, too."
  }
  
}