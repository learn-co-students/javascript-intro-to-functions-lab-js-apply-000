// shout to to upper case 
function shout(string) {
  return string.toUpperCase()
}


// whisper to lower case
function whisper(string) {
  return string.toLowerCase()
}


// logShout
function logShout(string) {
  console.log(string.toUpperCase())
}


// logWhisper
function logWhisper(string) {
  console.log(string.toLowerCase())
}



//Say Hi to Grandma: 1) returns "I can't hear you!" if string is lowercase 
//                  2) returns "YES INDEED!" if string is uppercase 
//                  3) returns "I love you, too." if string is "I love you, Grandma."

function sayHiToGrandma(string) {
    
    //defining variables for string responses
    var speakUp = "I can't hear you!"
    var yesIndeed = "YES INDEED!"
    var grandmaLove = "I love you, too."
    
    if (string.toLowerCase() === string){
      return speakUp 
    }
    
    else if (string.toUpperCase() === string){
      return yesIndeed
    }
    
    else if (string === "I love you, Grandma."){
      return grandmaLove
    }
}


