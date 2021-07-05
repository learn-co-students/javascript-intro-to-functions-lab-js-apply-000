function shout(string) {
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  var upperString= string.toUpperCase();
  console.log(upperString)
}

function logWhisper(string){
  var lowerString= string.toLowerCase();
  console.log(lowerString)
}

function sayHiToGrandma(string){
  if(string.toLowerCase() ===string){
    return "I can\'t hear you!"
  }
  if(string.toUpperCase()===string){
    return "YES INDEED!"
  }
  else if(string==="I love you, Grandma."){
    return "I love you, too."
  }
}
