function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
  
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
  var tmpString = string;
  if(tmpString === tmpString.toLowerCase()){
    return "I can't hear you!";
  }
  if(tmpString === tmpString.toUpperCase()){
    return "YES INDEED!";
  }
  if(tmpString === "I love you, Grandma."){
    return "I love you, too.";
  }
}

