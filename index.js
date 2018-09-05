function shout(string) {
  return string.toUpperCase()
};
shout("sing");


function whisper(string){
  return string.toLowerCase();
}
whisper("SING");

function logShout(string){
  console.log(string.toUpperCase());
}
logShout("sing")

function logWhisper(string){
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
if (string === string.toLowerCase()) {
return 'I can\'t hear you!';
 }
}
//sayHiToGrandma('I can\'t hear you!');
function sayHiToGrandma(string) {
else if (string === string.toUpperCase()) {
// if (string.toUpperCase() === string)
return "YES INDEED!";
 }
}
//sayHiToGrandma("YES INDEED!");


function sayHiToGrandma(string) {
if (string ===  "I love you, Grandma.")
return "I love you, too.";
}
