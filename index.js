const shout = string => string.toUpperCase();
const whisper = string => string.toLowerCase();

const logShout = string => console.log(string.toUpperCase());
const logWhisper = string => console.log(string.toLowerCase());

const sayHiToGrandma = string => {
  // If this function had a default behavior, I might opt to use ternary
  if (string === 'I love you, Grandma.') return 'I love you, too.';
  if (string === string.toLowerCase()) return 'I can\'t hear you!';
  if (string === string.toUpperCase()) return 'YES INDEED!';
};
