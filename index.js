function shout(string){
  return string.toUpperCase(); //"HELLO"
}
function whisper(string){
  return string.toLowerCase(); //"hello"
}
function logShout(string){
  console.log(string.toUpperCase()); //"HELLO"
}
function logWhisper(string){
  console.log(string.toLowerCase()); //"hello"
}
function sayHiToGrandma(string){
  if (string == whisper(string))
    return("I can't hear you!");
  else if (string == shout(string))
    return("YES INDEED!");
  else(string == "I love you, Grandma.")
    return("I love you, too.");
  
}