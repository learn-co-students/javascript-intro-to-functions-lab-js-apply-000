function shout (str){
  return str.toUpperCase();
}

function whisper (str){
  return str.toLowerCase();
}

function logShout (str){
  console.log(shout(str));
}

function logWhisper (str){
  console.log(whisper(str));
}

function sayHiToGrandma (str){
  if (str === "I love you, Grandma."){
    return "I love you, too.";
  }else if (str === whisper(str)){
    return "I can't hear you!";
  } else {
    return "YES INDEED!";
  }
}
