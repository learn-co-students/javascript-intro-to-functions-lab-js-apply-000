// shout(string) receives one argument returns all caps
function shout(string){
  return string.toUpperCase();
}


// whisper(string) receives on eargument and returns all lowercase
function whisper(string){
  return string.toLowerCase();
}

// logShout(string) calls console.log() one argument in all caps
function logShout(string){
  console.log(string.toUpperCase());
}

// logWhisper(string) console.log() it's one arguemt in all lower case
function logWhisper(string){
  console.log(string.toLowerCase());
}

// sayHiToGrandma(string) a: if "I love you, Grandma." returns "I love you, too.", b: if lowercase returns "I can't hear you!", c:if uppercase returns "YES INDEED!"

function sayHiToGrandma(string){
  if (string==="I love you, Grandma."){
    return "I love you, too.";
  }
  else if (string===string.toLowerCase()) {
    return "I can't hear you!";
  } else if (string===string.toUpperCase()){
    return "YES INDEED!";
  }
}