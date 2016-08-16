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
  var grandmaSays;
  if(string === string.toLowerCase()) {
    grandmaSays = "I can\'t hear you!";
  } else if(string === string.toUpperCase()) {
    grandmaSays = "YES INDEED!";
  } else if(string === "I love you, Grandma.") {
    grandmaSays = "I love you, too."
  }
  return grandmaSays;
}
