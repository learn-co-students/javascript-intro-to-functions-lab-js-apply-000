function shout(str){
   return str.toUpperCase();
};

function whisper(str){
  return str.toLowerCase();
};

function logShout(str){
  return console.log(shout(str))
};

function logWhisper(str){
  console.log(str.toLowerCase())
};

function sayHiToGrandma(str){
  if (str == whisper(str)){
    return "I can\'t hear you!"
  }else if (str == shout(str)){
    return "YES INDEED!"
  }else if (str == "I love you, Grandma."){
    return "I love you, too."
  }
};
