const shout = (string) => {
  return string.toUpperCase();
}

const whisper = (string) => {
  return string.toLowerCase();
}

const logShout = (string) => {
  console.log(shout(string));
}

const logWhisper = (string) => {
  console.log(whisper(string));
}

const sayHiToGrandma = (string) => {
  if(string.toUpperCase() === string){
    return 'YES INDEED!'
  } else if (string.toLowerCase() === string){
    return 'I can\'t hear you!';
  } else {
    return 'I love you, too.'
  }
}