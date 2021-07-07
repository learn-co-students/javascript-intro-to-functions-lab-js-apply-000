
function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout (string) {
  console.log(shout('hello'))
}

function logWhisper (string) {
  console.log(whisper('hello'))
}

function sayHiToGrandma(string) {
  // start with speciality case
  if (string === "I love you, Grandma.") {
    return "I love you, too."
  } else {
    // case where string is already all uppercase
    if(string === shout(string)) {
          return "YES INDEED!"
    }
    // case where string is already all lowercase
    if(string === whisper(string)) {
          return "I can't hear you!"
    }
  }
}