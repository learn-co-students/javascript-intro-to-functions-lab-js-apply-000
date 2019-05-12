function shout(string) {
  console.log('This is the shout function.')
  return string.toUpperCase();
}

function whisper(string) {
  console.log('This is the whisper function with this variable ' + string)
  return string.toLowerCase();
}

function logShout(string) {
  // do stuff
  console.log(string.toUpperCase())
  return string.toUpperCase();
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {
    return "I can't hear you!";
  }
  if (string === string.toUpperCase()){
    return "YES INDEED!";
  }
  if (string === "I love you, Grandma.") {
    return "I love you, too."
  }
  
}