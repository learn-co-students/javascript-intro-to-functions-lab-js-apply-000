function shout(string){
  return string.toUpperCase()
};

function whisper(string){
  return string.toLowerCase(
  )
};

function logShout(string){
  console.log(string.toUpperCase())
}

function logWhisper(string){
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string){
var lowerCase = "hello"
var upperCase = "HELLO"
var ily = "I love you, Grandma."

if (string === lowerCase) {
  return "I can\'t hear you!"
} else if (string === upperCase) {
    return "YES INDEED!"
} else if (string === ily){
    return "I love you, too."
} else {
  return "error"
}
};
