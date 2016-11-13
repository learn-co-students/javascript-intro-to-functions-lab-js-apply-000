function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  console.log(string.toUpperCase());
}
function logWhisper(string){
  console.log(string.toLowerCase());
}

function sayHiToGrandma(s){
  if(s === s.toLowerCase())
   return ("I can't hear you!");
  else   if(s === s.toUpperCase())
     return ("YES INDEED!");
  else if(s==="I love you, Grandma.")
   return("I love you, too."); 
}
