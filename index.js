function shout(String){
 return String.toUpperCase();
}
function whisper(string){
  return string.toLowerCase();
}
function logShout(string){
  console.log(string.toUpperCase());
}
function logWhisper(string){
  console.log(string.toLowerCase());
}
function sayHiToGrandma(String){
  if(String == String.toLowerCase()){
    return "I can\'t hear you!";
  }
  if(String == String.toUpperCase()){
    return "YES INDEED!";
  }
  if(String == "I love you, Grandma."){
    return "I love you, too.";
  }
}

  
  
