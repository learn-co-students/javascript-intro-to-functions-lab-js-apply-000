//Test One
function shout(string) {
  return string.toUpperCase()
}

//Test Two

function whisper(string) {
  return string.toLowerCase()
}

//Test Three

function logShout(string) { 
  console.log(string.toUpperCase())
}

//Test Four

function logWhisper(string) { 
  console.log(string.toLowerCase())
}

//Test Five - I don't see the mixedCase in the test? Should we cover this with another statement?

function sayHiToGrandma(string) {
 if(string.toLowerCase() === string) {
   return "I can\'t hear you!"
 }
 if(string.toUpperCase() === string) {
   return "YES INDEED!" 
 }
 else if(string === "I love you, Grandma.") {
   return "I love you, too."
  }
}

