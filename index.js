function shout(n){
  return n.toUpperCase();
}

function whisper(n){
  return n.toLowerCase();
}

function logShout(n){
  console.log(n.toUpperCase());
}

function logWhisper(n){
  console.log(n.toLowerCase());
}

function sayHiToGrandma(n){
  if(n === n.toUpperCase()){
    return "YES INDEED!";
  } else if (n === n.toLowerCase()){
    return "I can't hear you!";
  } else if (n === "I love you, Grandma."){
    return "I love you, too.";
  }
}
