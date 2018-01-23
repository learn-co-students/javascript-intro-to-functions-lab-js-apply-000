function shout(string){
  string = 'hello'.toUpperCase();
  return string;
}
function whisper(string){
  string = 'hello'.toLowerCase();;
  return string;
}
function logShout(string){
  string = 'hello'.toUpperCase();
  console.log(string);
}
function logWhisper(string){
  string = 'Hello'.toLowerCase();
  console.log(string);
}
function sayHiToGrandma(string){
     if (string === string.toLowerCase()){
       var lowerCase = string.toLowerCase();
       return ('I can\'t hear you!');
    }
    else if (string === string.toUpperCase()){
       var upperCase = 'YES INDEED!';
       return ('YES INDEED!');
       }
       else{
         var mixedCase = 'I love you, too.';
         return(mixedCase);
       }
     }
