function shout(string){
    return string.toUpperCase();

};

function whisper(string){
  return string.toLowerCase();
};

function logShout(string){
  console.log(string.toUpperCase());
};

function logWhisper(string){
  console.log(string.toLowerCase());
};

function sayHiToGrandma(string){
  let lowerCase = 'hello';
  let upperCase = 'HELLO';

  if (string === "I love you, Grandma."){
    return "I love you, too.";
  }

  if (string === upperCase){
    return "YES INDEED!";
  } else {
    return "I can\'t hear you!";
  }
}
