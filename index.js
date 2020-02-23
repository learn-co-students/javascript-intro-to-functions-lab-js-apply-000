const shout = (string) => {
  return string.toUpperCase()
}

const whisper = (string) => {
  return string.toLowerCase()
}

const logShout = (string) => {
  console.log(string.toUpperCase())
}

const logWhisper = (string) => {
  console.log(string.toLowerCase())
}

const sayHiToGrandma = (str) =>{
if(str === str.toLowerCase()){
  return "I can't hear you!"
}
if(str === str.toUpperCase()){
  return "YES INDEED!"
}
if(str === 'I love you, Grandma.'){
  return `I love you, too.`
}
}
