
/*
function addVariable(number, numberTwo) { // this is a funtion to add two numbers
  var sum = number + numberTwo
  console.log(sum)
}

x = 1
y = 3

//console.log(x + y)

//console.log(addVariable(x, y))
addVariable(x, y)

*/


function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
    return "I can't hear you!"
  }

  if (string.toUpperCase() === string) {
    return "YES INDEED!"
  }

  if (string === "I love you, Grandma.") {
    return "I love you, too."
  }

  return "Are you eating enough?"
}
