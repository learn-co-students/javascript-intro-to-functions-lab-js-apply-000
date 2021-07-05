function shout(string){
  
  return string.toUpperCase()
  
} // End shout function

function whisper(string){
  
  return string.toLowerCase()
  
} // End whisper function

function logShout(string){
  
  console.log(string.toUpperCase())
  
}

function logWhisper(string){
  
  console.log(string.toLowerCase())
  
} // end logWhisper function

function sayHiToGrandma(string){
  
  if (string == string.toUpperCase()){
    
    return "YES INDEED!"
    
  } else if (string == string.toLowerCase()){
    
    return "I can't hear you!"
    
  } else if (string === "I love you, Grandma."){
    
    return "I love you, too."
    
  }
  
} // End sayHiToGrandma function