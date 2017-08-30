function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  console.log(string.toUpperCase())
}

function logWhisper(string){
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string){
  var output
  if(string.toLowerCase() === string){
    output =  "I can't hear you!"
  }
  else if(string.toUpperCase() === string){
    output =  "YES INDEED!"
  }
  else if(string === "I love you, Grandma."){
    output = "I love you, too."
  }
  return output
}
