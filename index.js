function shout(string){
  string = string.toUpperCase();
  return string;
}

function whisper(string){
  string = string.toLowerCase();
  return string;
}

function logWhisper(string){
  string = string.toLowerCase();
  console.log(string);
}

function logShout(string){
  string = string.toUpperCase();
  console.log(string);
}

function sayHiToGrandma(string){
  switch string {
  case (string === lowercase):
    console.log("I can't hear you!");
    break;
  case (string === uppercase):
    console.log("YES INDEED!")
    break;
  default:   
    console.log("I love you, too.")
    break;
}
}