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
  let lowerCase = string.toLowerCase();
  let uppercase = string.toUpperCase();
  let stringTest = "I love you, Grandma.";
  if (string === lowerCase) {
    return "I can't hear you!" 
  } else if (string === uppercase) {
    return 'YES INDEED!';
  } else if (string === stringTest) {
    return 'I love you, too.'  
    }
}

