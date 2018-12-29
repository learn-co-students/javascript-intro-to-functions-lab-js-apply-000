function shout(string) {
  return string.toUpperCase()
}


function whisper(string) {
  return string.toLowerCase()
}


function logShout(string){
    string = string.toUpperCase()
    console.log(string)
}
function logWhisper(string){
    string = string.toLowerCase();
    console.log(string)
}

function sayHiToGrandma(string){
  // const lowerCase = string.toLowerCase();
  // const upperCase = string.toUpperCase();
  // const love = string;
  // Do not need to set string, you want to find out what wsas passed through to string
  
    if (string === string.toLowerCase()){
      return "I can't hear you!"
    } 
    if (string === string.toUpperCase()){
      return "YES INDEED!"
    }
    if(string === "I love you, Grandma."){
      return "I love you, too."
    }
}