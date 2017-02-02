function shout(string){
  return string.toUpperCase();
};

function whisper(string){
  return string.toLowerCase();
};

function logShout(string){
  var shout = string.toUpperCase();
  console.log(shout);
};

function logWhisper(string) {
  var whisper = string.toLowerCase();
  console.log(whisper);
};

function sayHiToGrandma(string){
  if(string === "I love you, Grandma.") {
    return "I love you, too.";
  } else if (string !== string.toUpperCase()){
    return "I can't hear you!";
  } else {
    return "YES INDEED!";
  }
};
