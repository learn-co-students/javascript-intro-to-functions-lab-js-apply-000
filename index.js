function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase();
}

function sayHiToGrandma(string){
  var lower = string.toLowerCase();
  var upper = string.toUpperCase();
  if (lower === string){
    return "I can't hear you!"
  } else if ( upper === string){
    return "YES INDEED!"
  } else if ( string === "I love you, Grandma."){
    return "I love you, too."
  }
}

function logWhisper(string){
  var lower = string.toLowerCase();
  console.log(lower)
}

function logShout(string){
  var upper = string.toUpperCase();
  console.log(upper);
}
