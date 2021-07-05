var shout = str =>  str.toUpperCase();

var whisper = str => str.toLowerCase();

var logShout = str => console.log(str.toUpperCase());

var logWhisper = str => console.log(str.toLowerCase());

var sayHiToGrandma = str => {
  if (str === str.toLowerCase()) return "I can't hear you!";
  if (str === str.toUpperCase()) return "YES INDEED!";
  if (str === 'I love you, Grandma.') return "I love you, too."
}
