function shout(stringd){
  return stringd.toUpperCase()
}

function whisper(arg){
  return arg.toLowerCase()
}

function logShout(arg){
  console.log(arg.toUpperCase())
}

function logWhisper(arg){
  console.log(arg.toLowerCase())
}

function sayHiToGrandma(string){
  if (string.toUpperCase() === string){
    return "YES INDEED!"
  }
  else if (string.toLowerCase() === string) {
    return "I can't hear you!"
  }
  else {
    return "I love you, too."
  }
}
