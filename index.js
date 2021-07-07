//1. shout(string)

function shout(string) {
  return string.toUpperCase()
};

shout('hello');


//2. whisper(string)
function whisper(string) {
    return string.toLowerCase()
};

whisper('HELLO');


//3. logShout(string)
function logShout(string) {
    console.log(string.toUpperCase())
};

logShout('javascript');


//4. logWhisper(string)
function logWhisper(string) {
  console.log(string.toLowerCase())
};

logWhisper('JAVASCRIPT');

//5-6-7 ----->sayHiToGrandma


function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {
    return "I can't hear you!"
  } else if (string === string.toUpperCase()) {
    return "YES INDEED!"
  } else if (string === "I love you, Grandma.") {
    return "I love you, too."
  } else {
    return string === ""

  }

};
