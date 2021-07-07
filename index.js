function shout(string){
  return string.toUpperCase();
}
function whisper(string){
  return string.toLowerCase();
}
function logShout(string){
  console.log(string.toUpperCase());
}
function logWhisper(string){
  console.log(string.toLowerCase())
}
function sayHiToGrandma(string){
  var dumbyString = string.toLowerCase();
  var dumbyString2 = string.toUpperCase();
  if (string === dumbyString){
     return "I can't hear you!";
  }else if(string ===dumbyString2){
    return "YES INDEED!"
  }else{
    return "I love you, too."
  }
}
  