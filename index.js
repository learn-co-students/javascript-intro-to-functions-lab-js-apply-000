 function shout(string) {
return string.toUpperCase()
}
function whisper(string){
return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase()); string
}
function logWhisper(string) {
console.log(string.toLowerCase()); string
}
function sayHiToGrandma(string) {
if(string === string.toUpperCase()) { 
  return "YES INDEED!" // test if string is all uppercase
    // code to run if conditional is true 
    }
  else if (string=== string.toLowerCase()){
    return "I can't hear you!"// test if string is all lowercase 
    }
  else if (string=== "I love you, Grandma."){
    return "I love you, too." // test if string is I love you
    } 
}