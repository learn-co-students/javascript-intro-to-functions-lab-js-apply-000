function shout(input){
  return input.toUpperCase();
}

function whisper(input){
  return input.toLowerCase();
}

function logShout(input){
  console.log(input.toUpperCase());
}

function logWhisper(input){
  console.log(input.toLowerCase());
}

function sayHiToGrandma(input){
  if(input =='hello'){
  return  "I can't hear you!";
}

  if(input =='HELLO'){
  return "YES INDEED!"
  }
  if(input =='I love you, Grandma.'){
  return "I love you, too."
  }
}
