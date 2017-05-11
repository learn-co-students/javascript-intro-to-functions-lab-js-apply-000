function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  var word = string.toUpperCase()
  console.log(word)
}

function logWhisper(string){
  var word = string.toLowerCase()
  console.log(word)
}

function sayHiToGrandma(string){
  var love = string
  if(string === love.toLowerCase()){
    return "I can't hear you!"
  } else if (string === love.toUpperCase()) {
    return "YES INDEED!"
  }
  if(love === "I love you, Grandma."){
    return "I love you, too."
  }
}
