var uppercase = ''
var lowercase = ''


function shout(string) {
  uppercase = string.toUpperCase();
  return uppercase
}

function whisper(string) {
  lowercase = string.toLowerCase();
  return lowercase
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {
    return `I can't hear you!`
  } else if (string === string.toUpperCase()) {
      return `YES INDEED!`
  } else if (string === `I love you, Grandma.`) {
      return `I love you, too.`
  } else {
      return `Error`
  }
}
