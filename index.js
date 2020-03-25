function shout (str) {
  return str.toUpperCase();
}

function whisper (str) {
  return str.toLowerCase();
}

function logShout(str) {
  console.log(str.toUpperCase());
}

function logWhisper(str) {
  console.log(str.toLowerCase());
}

function sayHiToGrandma(str) {
  let uppercase = str;
  let lowercase = str;
  if (lowercase.toLowerCase() === lowercase) {
    return `I can't hear you!`;
  } else if (uppercase.toUpperCase() === uppercase) {
    return `YES INDEED!`;
  } else if (str === `I love you, Grandma.`) {
    return `I love you, too.`;
  }
}