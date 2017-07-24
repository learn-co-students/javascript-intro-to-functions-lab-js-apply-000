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
  var response = "I can't hear you!"
  var love = "I love you, Grandma."
  var first = string.charAt(0)
  if(first!=first.toUpperCase()){
    return response
  }
  else if (string == love) {
    return "I love you, too."
  }
  else {
    return "YES INDEED!"
  }
}
