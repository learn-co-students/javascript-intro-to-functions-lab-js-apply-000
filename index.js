const shout = (string) => {
  return string.toUpperCase()
};

const whisper = (string) => {
  return string.toLowerCase()
};

const logShout = (string) => {
  console.log(string.toUpperCase())
};

cont logWhisper = (string) => {
  console.log(string.toLowerCase())
}

const sayHiToGrandma = (string) => {
  if (string === "I love you, Grandma."){
    return 'I love you, too.'
  }
  
  if (string === string.toLowerCase()){
    return "I can\'t hear you!"
  }
  
  if (string === string.toUpperCase()){
    return 'YES INDEED!'
  }
  
  
  
}