function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
   var caps = console.log(string)

   if(caps.toUpperCase() === true) {
     retrun caps
   } else {
     return caps.toUpperCase() 
   }    
}

