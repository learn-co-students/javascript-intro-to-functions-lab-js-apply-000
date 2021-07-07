function shout(string) {
  return string.toUpperCase ()
}

function whisper(string) {
  return string.toLowerCase ()
}

function logShout(string) {
  const spy = `hello`;
  console.log (spy.toUpperCase());
}

function logWhisper(string) {
  const spy = `HELLO`;
  console.log (spy.toLowerCase());
}


/* this is all grandma msgs

function sayHiToGrandma(string) {
  if (string.toLowerCase);
  return `I can't hear you!`;
}

function sayHiToGrandma(string) {
  if (sayHiToGrandma === "hello");
  return "I can't hear you!";
}
*/

/* new grandma functions
function sayHiToGrandma(string) {
const sayHiToGrandma = string;
  switch (sayHiToGrandma) {
    case sayHiToGrandma === "hello":
    return "I can't hear you!";
    case sayHiToGrandma === "HELLO":
    return "YES INDEED!";
  }
}



function sayHiToGrandma(string) {
  if (string === "I love you, Grandma.");
  return "I love you, too.";
}

*/



function sayHiToGrandma(string) {
const sayHiToGrandma = string;
  switch (sayHiToGrandma) {
    case "hello":
    return "I can't hear you!";
    case "HELLO":
    return "YES INDEED!";
    case "I love you, Grandma.":
    return "I love you, too.";
    default: null;
  }
}