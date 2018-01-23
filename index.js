function shout(a_string) {

  a_string = a_string.toUpperCase();

  return a_string;
}

function whisper(a_string) {

  a_string = a_string.toLowerCase();

  return a_string;
}

function logShout(a_string) {

  console.log(a_string.toUpperCase());

}

function logWhisper(a_string) {

console.log(a_string.toLowerCase());

}

function sayHiToGrandma(a_string) {

  if (a_string === a_string.toLowerCase()) {
    return "I can't hear you!";
  };

  if (a_string === a_string.toUpperCase()) {
    return "YES INDEED!";

  };

  if (a_string === "I love you, Grandma.") {
    return "I love you, too.";


  };



}
