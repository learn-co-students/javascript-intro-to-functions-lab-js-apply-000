const shout = (arg) => {
  return arg.toUpperCase();
};

const whisper = (arg) => {
  return arg.toLowerCase();
};

const logShout = (arg) => {
  console.log(arg.toUpperCase());
};

const logWhisper = (arg) => {
  console.log(arg.toLowerCase());
};

const sayHiToGrandma = (aStr) => {
  if (aStr.toLowerCase() === aStr) return "I can't hear you!";
  if (aStr.toUpperCase() === aStr) return "YES INDEED!";
  if (aStr === "I love you, Grandma.") return "I love you, too.";
};
