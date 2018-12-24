const shout = str => str.toUpperCase();

const whisper = str => str.toLowerCase();

const logShout = str => console.log(str.toUpperCase());

const logWhisper = str => console.log(str.toLowerCase());

const sayHiToGrandma = str => {
  if (str === str.toLowerCase()) {
    return `I can't hear you!`
  };
  if (str === str.toUpperCase()) {
    return `YES INDEED!`
  };
  if (str === `I love you, Grandma.`) {
    return `I love you, too.`;
  }
}
