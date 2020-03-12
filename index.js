function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  let newString = string.toUpperCase();
  console.log(newString);
}

function logWhisper(string){
  let newString = string.toLowerCase();
  console.log(newString);
}
function sayHiToGrandma(string){
  let newString = string.slice(0);
  if (string === newString.toLowerCase()){
    return "I can't hear you!";
  }
  else if (string === newString.toUpperCase()){
    return "YES INDEED!";
  }
  else if (string === "I love you, Grandma."){
    return "I love you, too.";
  }
}
