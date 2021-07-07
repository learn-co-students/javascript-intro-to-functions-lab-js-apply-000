function shout(string){
  var capsS=string.toUpperCase();
  return capsS;
}
function whisper(string){
  var lowerV=string.toLowerCase();
  return lowerV;
}
function logShout(string){
  console.log(string.toUpperCase());
}
function logWhisper(string){
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string){
var loud= string.toUpperCase();
var soft=string.toLowerCase();
  if(string === soft){
    return "I can't hear you!";
  }
  if(string === loud){
    return "YES INDEED!";
  }
  if(string === "I love you, Grandma."){
    return "I love you, too.";
  }
}
