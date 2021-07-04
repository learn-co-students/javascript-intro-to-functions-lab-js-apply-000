const shout = (string) => {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string1) {
  console.log(`${string1.toUpperCase()}`)
}
function logWhisper(string) {
  console.log(string.toLowerCase())
}
function sayHiToGrandma(string) {
if( string === "I love you, Grandma.") {
  return "I love you, too."
} else if(string === string.toLowerCase()) {
  return "I can't hear you!"
} else {
  return "YES INDEED!"
}

}
