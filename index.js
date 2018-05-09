function shout(string){
  return string.toUpperCase()
}
//uppercase word
function whisper(string){
  return string.toLowerCase()
}
//lowercase word
function logShout(string){
  console.log(string.toUpperCase())
}
//logs UC word
function logWhisper(string){
  console.log(string.toLowerCase())
}
//logs LC word
function sayHiToGrandma(string){
  if (string === string.toLowerCase())
    return "I can't hear you!"
  if (string === string.toUpperCase())
    return "YES INDEED!"
  if (string === "I love you, Grandma.")
    return "I love you, too."
}
//retuns grandma's response
