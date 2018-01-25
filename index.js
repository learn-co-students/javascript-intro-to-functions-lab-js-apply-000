function shout(string){
return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  let loud = string.toUpperCase();
  console.log(loud);
}

function logWhisper(string){
  let quite = string.toLowerCase();
  console.log(quite);
}

function sayHiToGrandma(string){
  let str = string;
  if(str === string.toLowerCase()){
    return `I can\'t hear you!`;

  }
}

function sayHiToGrandma(string){
  let str = string;
  if(str === string.toUpperCase()){
    return `YES INDEED!`;
  }
}

function sayHiToGrandma(string){
    const correctStr = 'I love you, Grandma.'
  if(string === correctStr){
    return `I love you, too.`;
  }
}
