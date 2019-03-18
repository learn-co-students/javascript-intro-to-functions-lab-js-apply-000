const shout = (string) => {
  return string.toUpperCase();
}

const whisper = (string) => {
  return string.toLowerCase();
}

const logShout = (string) => {
  console.log(string.toUpperCase());
}

const logWhisper = (string) => {
  console.log(string.toLowerCase());
}

const sayHiToGrandma = (string) => {
  if (string.toLowerCase() === 'i love you, grandma.') {
    return ("I love you, too.");
  } else if (string == string.toLowerCase()){
    return ('I can\'t hear you!');
  } else if (string == string.toUpperCase()){
    return('YES INDEED!');
  }
  
  return('I got fake people showing fake love to me');
}