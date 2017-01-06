const shout = str => {
  return str.toUpperCase();
};

const whisper = str => {
  return str.toLowerCase();
};

const logShout = str => {
  console.log(shout(str));
}

const logWhisper = str => {
  console.log(whisper(str));
}

const sayHiToGrandma = str => {
  if ( str === str.toLowerCase() ) {
    return "I can't hear you!";
  }

  if ( str === str.toUpperCase() ) {
    return "YES INDEED!";
  }

  if ( str === "I love you, Grandma.") {
    return "I love you, too.";
  }
}
