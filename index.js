function shout(arg){
  return arg.toUpperCase()
}
function whisper(arg){
  return arg.toLowerCase()
}
function logShout(arg){
  console.log(arg.toUpperCase())
}
function logWhisper(arg){
  console.log(arg.toLowerCase())
}
function sayHiToGrandma(arg){
  if(arg==="hello"){
    return "I can't hear you!"
  }else if(arg==="HELLO"){
    return "YES INDEED!"
  }else{
    return "I love you, too."
  }
}