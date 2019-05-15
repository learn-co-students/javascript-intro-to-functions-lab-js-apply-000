const shout = string => {
  return string.toUpperCase();
}

const whisper = string => {
  return string.toLowerCase();
}

const logShout = string => {
  return console.log(string.toUpperCase());
}

const logWhisper = string => {
  return console.log(string.toLowerCase());
}

const sayHiToGrandma = string => {
  if(string === 'I love you, Grandma.') return "I love you, too."
  if (string === string.toLowerCase()) return "I can't hear you!"
  else if (string === string.toUpperCase()) return "YES INDEED!"
}
