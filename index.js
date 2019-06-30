function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
   console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
  var lowercase = 'hello';
  var uppercase = "HELLO";
  var mixedCase = "I love you, Grandma."
 
  if (uppercase.toUpperCase() === string) {
    return "YES INDEED!";
  }
  
   if (lowercase.toLowerCase() === string) {
     return "I can\'t hear you!";
  }
  if (mixedCase === string) {
    return "I love you, too.";
  }
}
