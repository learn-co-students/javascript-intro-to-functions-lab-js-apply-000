function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  return console.log(string.toUpperCase())
}

function logWhisper(string){
  return console.log(string.toLowerCase())
}

function sayHiToGrandma(string){
  var uppercase = "YES INDEED!";
  var lowercase = "I can't hear you!";
  var theyloveme = "I love you, Grandma.";
  var ilovethemtoo = "I love you, too.";

  if(string.toUpperCase() === string){
    return uppercase;
  }

  if(string.toLowerCase() === string){
    return lowercase;
  }

  if(string === theyloveme){
    return ilovethemtoo;
  }

}
