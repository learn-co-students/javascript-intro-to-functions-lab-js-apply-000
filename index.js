// Intro to Functions Lab
// Laura Nadolski
// 4/8/18

// shout(string) takes a string as input and returns said
// string back to the user in all caps.
function shout(string) {
  return string.toUpperCase();
}

// whisper(string) takes a string as input and returns said
// string back to the user in all lowercase.
function whisper(string) {
  return string.toLowerCase();  
}

// logShout(string) takes a string as input and console logs said
// string back to the user in all caps.
function logShout(string){
  console.log(shout(string));
}

// logShout(string) takes a string as input and console logs said
// string back to the user in all lowercase.
function logWhisper(string) {
  console.log(whisper(string));
}

// sayHiToGrandma(string) takes a string as input and returns
// a specific response based on whether the input string is
// lowercase, uppercase, or "I love you, Grandma."
function sayHiToGrandma(string) {
  if (string === whisper(string)) {
    return "I can't hear you!";
  }
  else if (string === shout(string)) {
    return "YES INDEED!";
  }
  else if (string === "I love you, Grandma.") {
    return "I love you, too.";
  }
}