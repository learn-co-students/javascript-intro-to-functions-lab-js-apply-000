function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string){
  var loud = shout(string);
  console.log(loud)
}

function logWhisper(string){
  var word = whisper(string);
  console.log(word)
}

function sayHiToGrandma(string){
  var word = string;
  if (whisper(string) === word) {
    return "I can't hear you!";
  } else if (shout(string) === word) {
     return "YES INDEED!";
  } else {
    return "I love you, too.";
  }
}
