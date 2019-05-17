function shout(word){
  
  return word.toUpperCase();
  
}

function whisper(word){
  
  return word.toLowerCase();
  
}

function logShout(word){
  
  console.log(word.toUpperCase());
  
}

function logWhisper(word){
  
  console.log(word.toLowerCase());
  
}

const sayHiToGrandma = words =>{
  
  if(words === words.toLowerCase()){
    return 'I can\'t hear you!'
  }
  
  if(words === words.toUpperCase()){
    return 'YES INDEED!'
  }
  
   if(words === 'I love you, Grandma.'){
    return 'I love you, too.'
  }
  
}







