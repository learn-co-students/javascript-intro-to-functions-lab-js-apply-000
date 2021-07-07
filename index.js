function shout(string) {
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  console.log(shout(string));
}

function logWhisper(string){
  console.log(whisper(string));
}

function sayHiToGrandma(string){
  const lowerCase = string.toLowerCase();
  const upperCase = string.toUpperCase();
  const mixed = 'I love you, Grandma.'  
  
  if ( lowerCase === string) {
    return ("I can't hear you!")
  } 
  
  if ( upperCase === string) {
    return ("YES INDEED!")
  } 
  
  if ( mixed === string) {
    return ("I love you, too.")
  }
}


