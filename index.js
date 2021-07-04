const shout = string =>{
  return string.toUpperCase();
}

const whisper = string => string.toLowerCase();

const logShout = str => console.log(str.toUpperCase());

const logWhisper = str => console.log(str.toLowerCase());

const sayHiToGrandma = str => {
  
 if(str === 'I love you, Grandma.'){
   return "I love you, too.";
 } else {
    return (str === str.toLowerCase()) ? `I can't hear you!` :`YES INDEED!`
 }
}

