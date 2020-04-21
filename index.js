// shout returns the string in uppercase
function shout(string) {
  return string.toUpperCase();
}
// whisper returns the input string in lowercase
function whisper(string){
  return string.toLowerCase();
}

// logs the string in uppercase to the console
function logShout(string) {
  console.log(string.toUpperCase());
}

// logs the string in lowercase to the console
function logWhisper(string) {
  console.log(string.toLowerCase());
}

// function checks if the string is in upercase or not,
// if it isn't it returns I can't hear you!
function sayHiToGrandma(string) {
  if string === string.toUpperCase() {
    return "YES INDEED!"
  } 
  else if (string == "I love you, Grandma.") {
    return "I love you, too."
  }
  else {
    return "I can't hear you!"
  }
}









