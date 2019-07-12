function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
  if(string === string.toLowerCase()) {
    const lowReply = 'I can\'t hear you!';
    return lowReply;
  } else if(string === string.toUpperCase()) {
    const highReply = 'YES INDEED!';
    return highReply;
  } else if(string === 'I love you, Grandma.') {
    const love = 'I love you, too.';
    return love;
  }
}


