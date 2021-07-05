

function shout(string) {
  return string.toUpperCase(); // .toUpperCase() makes strings uppercase
}

function whisper(string) {
  return string.toLowerCase(); // toLowerCase() makes strings to lower case
}

function logShout(string) {
  console.log(string.toUpperCase()); // console log toUpperCase() when called on a string
}

function logWhisper(string) {
  console.log(string.toLowerCase()); // console logs toLowerCase() when called on a string
}

function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {     // if string is lower case returns line 21
    return "I can't hear you!";
  } else if (string === string.toUpperCase()) { // if string is upper case returns line 23
      return "YES INDEED!";
  } else if ( string === "I love you, Grandma.") {  // if sting is the same as, returns line 25
    return "I love you, too.";
  }
}

