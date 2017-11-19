function shout(string){
  return string.toUpperCase()
}
function whisper(string){
  return string.toLowerCase()
}
function logShout(string){
  console.log(string.toUpperCase())
}
function logWhisper(string){
  console.log(string.toLowerCase())
}
function sayHiToGrandma(string){
  let string2=string.toUpperCase()
  let string3=string.toLowerCase()
  if(string==="I love you, Grandma."){
    return "I love you, too."
  }else if(string===string2){
    return "YES INDEED!"
  }else if(string===string3){
    return "I can't hear you!"
  }
}
