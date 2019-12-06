function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  var upString = (string.toUpperCase());
  console.log(upString);
}

function logWhisper(string){
  var lowString = (string.toLowerCase());
  console.log(lowString);
}

//How can grandma hear I love you if it is not upper case?
function sayHiToGrandma(string){
  if (string == string.toLowerCase()){
    return "I can't hear you!";
  }
  else if (string == string.toUpperCase()){
    return "YES INDEED!";
  }
  else if (string == "I love you, Grandma."){
    return "I love you, too.";
  }
}

