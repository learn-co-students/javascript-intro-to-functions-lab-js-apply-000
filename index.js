
// Issue with muliple uppercase and lowercase together scenario , please correct it.
function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string){
  console.log(string.toUpperCase())
}

function logWhisper(string){
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string){
 var uppercase = "YES INDEED!"
 var lowercase = "I can't hear you!"
 
 
if (uppercase.toUpperCase() === uppercase){// true
  string = uppercase
}
else if (lowercase.toLowerCase() === lowercase){ // true
string = lowercase
}

return string;

}

