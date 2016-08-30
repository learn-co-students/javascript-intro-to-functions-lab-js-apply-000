function shout(string){
  return string.toUpperCase();
}

function whisper(thing){
  return thing.toLowerCase()
}

function logShout(thing){
  console.log(thing.toUpperCase())
}

function logWhisper(string){
console.log(string.toLowerCase())
}




function sayHiToGrandma(string){
  if (string.toLowerCase() === string){
    return "I can\'t hear you!"

  }
  if (string.toUpperCase() === string){
    return "YES INDEED!"
  }
  if (string == "I love you, Grandma."){
    return "I love you, too."
  }
}
