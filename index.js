function shout(string){
  
  return string.toUpperCase()
  
}


function whisper(string){
  
  return string.toLowerCase()
}

function sayHiToGrandma(string){
  
  let newWord= string.toLowerCase()
  let newWord2= string.toUpperCase()
  let wordNew= "I love you, Grandma."
if( string ===newWord){
  return "I can't hear you!"
}
if( string=== newWord2){
  return "YES INDEED!"
}
if(string=== wordNew){
  return "I love you, too."
}
}


function logShout(string){
  console.log(string.toUpperCase())
}

function logWhisper(string){
  console.log(string.toLowerCase())
}

