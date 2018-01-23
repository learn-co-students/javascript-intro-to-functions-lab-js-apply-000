function shout(string) {
    return string.toUpperCase();
}
shout("Hello!");

function logShout(string) {
    console.log(string.toUpperCase());
}
logShout("Hello!");

function whisper(string) {
    return string.toLowerCase();
}
whisper("Hello!");

function logWhisper(string) {
    console.log(string.toLowerCase());
}
logWhisper("Hello!");

function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {
    return "I can't hear you!"
  }
  else if (string === string.toUpperCase()){
    return "YES INDEED!"
  }
  else if(string === "I love you, Grandma."){
    return "I love you, too."
  }
}
sayHiToGrandma("I love you, Grandma.");
