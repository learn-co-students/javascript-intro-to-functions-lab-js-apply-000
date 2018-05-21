const shout = (str) => {
  return str.toUpperCase();
}

const whisper = (str) => {
  return str.toLowerCase();
}

const logWhisper = (str) => {
  console.log(str.toLowerCase());
}

const logShout = (str) => {
  console.log(str.toUpperCase());
}


const sayHiToGrandma = (str) => {
  if (str.toLowerCase() === str) {
    return "I can't hear you!";
  }
  if (str.toUpperCase() === str) {
    return "YES INDEED!";
  }
  if (str === 'I love you, Grandma.') {
    return "I love you, too.";
  }
}
