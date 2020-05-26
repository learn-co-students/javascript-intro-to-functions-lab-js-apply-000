const shout = str => {
  return str.toUpperCase();
}

const whisper = str => {
  return str.toLowerCase();
}

const logShout = str => {
  return console.log(shout(str));
}

const logWhisper = str => {
  return console.log(whisper(str));
}

const sayHiToGrandma = str => {
  if(str === whisper(str)){
    return "I can't hear you!";
  } else if(str === shout(str)){
    return 'YES INDEED!';
  }
  if(str === 'I love you, Grandma.'){
    return 'I love you, too.'
  }
}