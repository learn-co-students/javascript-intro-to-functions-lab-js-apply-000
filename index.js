var upper = "HELLO", lower = "hello", mixed = "Hello";

function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  if (string === "HELLO");
  console.log("HELLO");
}

function logWhisper(string){
  if (string === "hello");
  console.log("hello");
}

function sayHiToGrandma(string){
  if (string === "I love you, Grandma.") return ("I love you, too.");
  if (string === upper) return ("YES INDEED!");
  if (string === lower) return ("I can't hear you!");
}