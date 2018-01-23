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
  var love = "I love you, Grandma.";
  var upper = "HELLO";
  var lower = "hello";

  if(lower === string){
    return "I can't hear you!";
  }else if(upper === string){
    return "YES INDEED!";
  }else if(love === string){
    return "I love you, too.";
  }
}
