function shout(string){//receives one argument and returns it in all caps
  return string.toUpperCase()
}

function whisper(string){//receives one argument and returns it in all lowercase
  return string.toLowerCase()
}

function logShout(string){//calls console.log() its one argument in all caps
  console.log(string.toUpperCase())
}

function logWhisper(string){ //calls console.log() its one argument in all lowercase
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string){//returns "I can\'t hear you!" if `string` is lowercase
  if (string == string.toLowerCase()){
    return "I can\'t hear you!"
  }if (string == string.toUpperCase()){
    return "YES INDEED!"
  }if (string == "I love you, Grandma."){
    return "I love you, too."
  }
}
