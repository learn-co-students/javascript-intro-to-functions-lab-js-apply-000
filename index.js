function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  string = shout(string)
  return console.log(string)
}

function logWhisper(string){
  string = whisper(string);
  return console.log(string)
}

function sayHiToGrandma(string){
  var response = ""
  if (string === "I love you, Grandma."){
    response = "I love you, too."
  } else if (string === string.toUpperCase()) {
    response = "YES INDEED!"
  } else {
    response = "I can\'t hear you!"
  }
  return response
}