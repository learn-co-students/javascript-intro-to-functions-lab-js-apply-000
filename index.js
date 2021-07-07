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
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string){
  var solution = "";
  var upper = string.toUpperCase();
  var lower = string.toLowerCase();
  if(string === "I love you, Grandma."){
    solution = "I love you, too.";
  }
  else if(string === upper){
    solution = "YES INDEED!";
  }
  else if(string === lower){
    solution = "I can't hear you!";
  }
  return solution;
}
