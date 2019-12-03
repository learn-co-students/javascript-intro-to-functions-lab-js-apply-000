function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
      console.log(string.toUpperCase())
}

function logWhisper(string){
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string){
  let small="I can't hear you!";
  let big ="YES INDEED!";
  let last="I love you, too.";
  
  if(string.toLowerCase(string)===string){
    return small;
  }else if(string.toUpperCase(string)===string){
    return big;
  }else if(string==="I love you, Grandma."){
    return last;
  }
  
}