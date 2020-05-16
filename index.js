function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  console.log(shout(string));
}

function logWhisper(string){
  console.log(whisper(string));
}

function sayHiToGrandma(string){
  var lowerCaseResp = "I can't hear you!";
  var upperCaseResp = "YES INDEED!";
  var iLYResp = "I love you, too.";
  
  if(string.toUpperCase()===string)
    return upperCaseResp;
  else if(string.toLowerCase()===string)
    return lowerCaseResp;
  else if(string === "I love you, Grandma.")
    return iLYResp;
}