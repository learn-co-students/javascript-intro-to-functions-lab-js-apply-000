function shout(string) {
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
  var response = ''
  var lowercase = string.toLowerCase()
  var uppercase = string.toUpperCase()
  if(string===lowercase){
    response = "I can't hear you!"
  }
  if(string===uppercase){
    response = "YES INDEED!"
  }
  if(string==="I love you, Grandma."){
    response = "I love you, too."
  }
  return response
}