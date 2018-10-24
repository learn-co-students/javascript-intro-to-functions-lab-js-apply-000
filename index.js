function shout(string) {
}
function shout(string){
  return string.toUpperCase()
}
function whisper(string){
  return string.toLowerCase()
}
function logShout(string){
  
console.log('HELLO')
}
function logWhisper(string){
  console.log('hello')
}
//string = "HELLO"

const sayHiToGrandma = function(string){
  if(string === "I love you, Grandma."){
  return "I love you, too."
}
//if("I love you too." === "i love you too.")
if(string === string.toLowerCase()){
  return "I can\'t hear you!"
}
return "YES INDEED!"
}