const shout = (str) => {
  return str.toUpperCase()
}

const whisper = (str) => {
  return str.toLowerCase()
}

const logShout = (str) => {
  console.log(str.toUpperCase());
}

const sayHiToGrandma = (str) => {
  if (str === "I love you, Grandma.") return "I love you, too.";
  if (str === str.toLowerCase()) return "I can't hear you!";
  else return "YES INDEED!";
}

const logWhisper = (str) => {
  console.log(str.toLowerCase())
}
