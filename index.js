function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  const stringUp = shout(string);
  console.log(stringUp);
}

function logWhisper(string){
   const stringLow = whisper(string);
  console.log(stringLow);
}

function sayHiToGrandma(string){
  if (string === whisper(string)){
  return ("I can\'t hear you!");}else if(string === shout(string)){
    return ("YES INDEED!")
  }else{if(string === "I love you, Grandma."){
    return("I love you, too.");
  }}
}