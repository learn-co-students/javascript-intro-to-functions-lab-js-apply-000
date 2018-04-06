function shout(string){
  return string.toUpperCase();
}
function whisper(string){
  return string.toLowerCase();
}
function logShout(str){
  console.log(str.toUpperCase());
}
function logWhisper(str){
  console.log(str.toLowerCase());
}
function sayHiToGrandma(string){
  let result = string;
  if (string === "I love you, Grandma."){
    result = "I love you, too.";
  }
  else if (string === string.toLowerCase()){
    result = "I can't hear you!";
  }
  else if (string === string.toUpperCase()){
    result = "YES INDEED!";
  }
  return result;
}
