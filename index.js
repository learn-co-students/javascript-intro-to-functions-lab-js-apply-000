/* shout(string)
    ✓ receives one argument and returns it in all caps

  whisper(string)
    1) receives one argument and returns it in all lowercase

  logShout(string)
    2) calls console.log() its one argument in all caps

  logWhisper(string)
    3) calls console.log() its one argument in all lowercase

  sayHiToGrandma(string)
    4) returns "I can't hear you!" if `string` is lowercase
    5) returns "YES INDEED!" if `string` is uppercase
    6) returns "I love you, too." if `string` is "I love you, Grandma."`
*/

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
  if (string === "I love you, Grandma.") {
    return "I love you, too."
  } else if (string === string.toLowerCase()) {
    return "I can't hear you!"
  } else if (string === string.toUpperCase()) {
    return "YES INDEED!"
  }
}
