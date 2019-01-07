function shout(inputString){
  return inputString.toUpperCase();
}


function whisper(nextString){
  return nextString.toLowerCase();
}

function logShout(newerString){
  var spy = console.log(newerString.toUpperCase());
}

function logWhisper(bestestString){
  var spy = console.log(bestestString.toLowerCase());
}

function sayHiToGrandma(string){
  if(string == "I love you, Grandma."){
    return "I love you, too.";
  }
  else if (string == string.toUpperCase()){
    return "YES INDEED!";
  }
  else if(string == string.toLowerCase()){
    return "I can't hear you!";
  }
}
