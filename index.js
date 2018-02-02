function shout(str){
  return str.toUpperCase();
}

function whisper(str){
  return str.toLowerCase();
}

function logShout(str){
  console.log(str.toUpperCase());
}

function logWhisper(str){
  console.log(str.toLowerCase());
}

function sayHiToGrandma(str){
  var check = str
  if(check.toLowerCase() === str){
    return "I can't hear you!";
  }
  if(check.toUpperCase() === str){
    return "YES INDEED!";
  }
  else{
    return "I love you, too.";
  }
}
