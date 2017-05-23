function shout(value){
  return value.toUpperCase();
}

function whisper(value){
  return value.toLowerCase();
}

function logShout(value){
  console.log(shout(value));
}

function logWhisper(value){
  console.log(whisper(value));
}

function sayHiToGrandma(value){
  if(value === "I love you, Grandma."){
    return "I love you, too."
  } else if(value === value.toUpperCase()){
    return "YES INDEED!";
  } else {
    return "I can\'t hear you!";
  }
}
