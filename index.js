function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  if(string === string.toLowerCase()){
      var response1 = "I can't hear you!"
      return response1
  }
  else if(string === string.toUpperCase()){
      var response2 = "YES INDEED!"
      return response2
  }
  else if(string === "I love you, Grandma."){
      var response3 = "I love you, too."
      return response3
  }
}