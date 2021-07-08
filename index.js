function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(`hello`.toUpperCase())
}

function logWhisper(string) {
  console.log(`hello`.toLowerCase())
}

function sayHiToGrandma(string) {
var uppercase = string;
var lowercase = string;
var mixedCase =  string;


  if (lowercase.toLowerCase() === lowercase) {
    return "I can't hear you!"
  } else if(uppercase.toUpperCase() === uppercase) {
     return "YES INDEED!"
  } else {
    return "I love you, too."
  }
  
}


// var uppercase = "HELLO!"
 
//uppercase.toUpperCase() === uppercase // true
 
//var lowercase = 'hello!'
 
//lowercase.toLowerCase() === lowercase // true
 
//var mixedCase = 'Hi there!'
 
//mixedCase.toLowerCase() === mixedCase // false
 
//mixedCase.toUpperCase() === mixedCase // false 