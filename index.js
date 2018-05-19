function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  console.log(string.toUpperCase());
  return;
}

function logWhisper(string){
  console.log(string.toLowerCase());
  return;
}

function sayHiToGrandma(string){
  var lower = string.toLowerCase();
  var upper = string.toUpperCase();
  
  if(string === lower){
    return "I can't hear you!";
  } if(string === upper){
    return "YES INDEED!";
  } if(string === "I love you, Grandma."){
    return "I love you, too.";
  }
}