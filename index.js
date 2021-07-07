function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}
function logShout(string){
 var spy = (string).toUpperCase()
  console.log(spy);
  
}

function logWhisper(string) {
  var chicken = (string).toLowerCase()
  console.log(chicken);
}

function sayHiToGrandma(string){
  var icecream = string;
  if (icecream.toLowerCase()=== icecream) {
    return "I can't hear you!"
  }
  else if (icecream.toUpperCase()=== icecream){
    return "YES INDEED!"
  }
  else if (icecream == "I love you, Grandma."){
    return "I love you, too."
  }
    
    
}

