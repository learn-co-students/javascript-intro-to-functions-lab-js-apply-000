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
  var deaf = "I can't hear you!"
  var loud = "YES INDEED!"
  var love = "I love you, too."
  
  if(string.toUpperCase() === string){
    return loud
  }
  if (string.toLowerCase() === string){
    return deaf
  }
  if (string === "I love you, Grandma."){
    return love
  }
}