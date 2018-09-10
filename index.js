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
  
  let returnString = "";
  
  if (string === string.toLowerCase()){
    returnString += "I can't hear you!";
  }
  
  else{
    returnString += "YES INDEED!"
  }
  
  if (string === "I love you, Grandma."){
    returnString = "I love you, too."
  }
  
  return returnString;
}