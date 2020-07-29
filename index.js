const shout = (string) => {
  return string.toUpperCase();
};

const whisper = (string) => {
  return string.toLowerCase();
};

const logShout = (string) => {
  let shout = string.toUpperCase();
  console.log(shout)
};

const logWhisper = (string) => {
  let whisp = string.toLowerCase();
  console.log(whisp);
};

const sayHiToGrandma = (string) => {
  
  if (string === string.toLowerCase()) {
    return 'I can\'t hear you!'
  } else if (string === string.toUpperCase()) {
    return 'YES INDEED!'
  } else {
    return 'I love you, too.'
  }
}