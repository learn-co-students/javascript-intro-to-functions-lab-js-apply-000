function shout(str){
  return str.toUpperCase()
}
function whisper(str1){
  return str1.toLowerCase()
}
function logShout(str2){
  console.log(str2.toUpperCase()) 
}
function logWhisper(str3){
  console.log(str3.toLowerCase())
}
function sayHiToGrandma(str){
  if (str===str.toLowerCase()){
    return "I can't hear you!"
  }
  if (str===str.toUpperCase()){
    return "YES INDEED!"
  }
  if (str==="I love you, Grandma."){
    return "I love you, too."
  }
  
}
