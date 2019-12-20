let shout = string => string.toUpperCase();
let whisper = string => string.toLowerCase();
let logShout = string => console.log(string.toUpperCase());
let logWhisper = string => console.log(string.toLowerCase());
let sayHiToGrandma = string => {
  if(string == "I love you, Grandma.")
    return "I love you, too.";
    
  if(string == string.toLowerCase())
    return "I can't hear you!"
  else
    return "YES INDEED!"
}