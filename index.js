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

function sayHiToGrandma(message){
  if (message.toLowerCase === message) {return "I can\'t hear you!"}
  if (message.toUpperCase === message) {return "YES INDEED!"}
  if (message === "I love you, Grandma") {return "I love you, too."}
}