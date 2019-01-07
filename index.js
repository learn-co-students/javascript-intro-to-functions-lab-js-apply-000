function shout (str){
  return str.toUpperCase();
}
shout('hello');


function whisper (str) {
  return str.toLowerCase();
}
whisper('hello');

function logShout(str){
  return console.log(str.toUpperCase());
}
logShout('hello');


function logWhisper(str){
  return console.log(str.toLowerCase());
}
logWhisper('hello')

function sayHiToGrandma(str){
  if(str.toLowerCase() === str){
    return "I can\'t hear you!";
  }else if (str.toUpperCase() === str){
    return "YES INDEED!";
  }else if (str === 'I love you, Grandma.'){
    return "I love you, too.";
  }
}
sayHiToGrandma('hello');
