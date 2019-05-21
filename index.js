function shout (text) {
  return text.toUpperCase();
}

function whisper (lowercase) {
  return lowercase.toLowerCase();
}

function logShout (text) {
  console.log(text.toUpperCase());
}

function logWhisper (text) {
  console.log(text.toLowerCase());
}

function sayHiToGrandma (text) {
  if (text.toUpperCase() === text) {
    return "YES INDEED!"
    
  }
  else if ("I love you, Grandma." === text) {
    return "I love you, too."
  }
  else {
    return "I can't hear you!";
  }
  
}


