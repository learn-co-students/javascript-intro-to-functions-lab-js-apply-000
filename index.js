function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logWhisper(string){
  var quiet = string.toLowerCase();
  console.log(quiet);
}

function logShout(string){
  var loud = string.toUpperCase();
  console.log(loud);
}

function sayHiToGrandma(string){
  
  if(string == string.toLowerCase()){
      return "I can't hear you!";
  }
  else if(string == string.toUpperCase()){
    return "YES INDEED!";
  }
  else if(string == "I love you, Grandma."){
    return "I love you, too." 
  }
  
}
