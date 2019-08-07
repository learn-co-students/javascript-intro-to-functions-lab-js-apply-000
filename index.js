function shout(string) {
  return string.toUpperCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
}



function whisper (str) {
  return str.toLowerCase();
}


function logWhisper(str) {
  console.log(str.toLowerCase());
}

//4
function sayHiToGrandma(str) {
  if (str === str.toLowerCase()) {
    return "I can't hear you!";
  } else if (str === "I love you, Grandma."){
    return "I love you, too."
  } else if (str === str.toUpperCase()) {
    return "YES INDEED!";
  }
}
