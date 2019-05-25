
//To Upper Case Function

function shout(string){
  return string.toUpperCase();
  
}

shout('hello');

// to Lower Case Function
function whisper(string){
    return string.toLowerCase();
}
whisper('HELLO');

// Third function

function logShout(string){
  const spy = string.toUpperCase();
  console.log(spy);
}

logShout('hello');

// Fourth Function 
function logWhisper(string){
  console.log(string.toLowerCase())
}
function spy(string){
  return logWhisper(string);
}
logWhisper('JAMAL')
spy('JAMAL');

// Fifth function
function  sayHiToGrandma(string){
  switch (string) {
    case string.toLowerCase():
      return `I can't hear you!`
      break;

    case string.toUpperCase():
      return `YES INDEED!`
      break;
    case 'I love you, Grandma.':
      return `I love you, too.`
      break;submit
  }
}