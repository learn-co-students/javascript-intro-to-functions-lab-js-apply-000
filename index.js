function shout(string)  {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  
  var upper = string.toUpperCase();
  var lower = string.toLowerCase();
  var love = "I love you, Grandma.";
  
  if (string === upper ) {
    return("YES INDEED!");
  }
  
  if (string === lower) {
    return ("I can't hear you!");
  }
  
  if(string === love ) {
    return("I love you, too.");
  }
}