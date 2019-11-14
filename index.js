function shout(string) {
  return string.toUpperCase()
}


function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
     const spy = string.toUpperCase();
  console.log(spy)
   
}

logShout('hello')

function logWhisper(string) {
const spy = string.toLowerCase();
console.log(spy)
}

logWhisper('HELLO')

function sayHiToGrandma(string) {
  if(string === string.toLowerCase()){
  return "I can't hear you!"
  sayHiToGrandma('hello')

  }
  else if(string === string.toUpperCase()){
    return "YES INDEED!"
    sayHiToGrandma('HELLO')
}else(string === "I love you, Grandma.")
    return "I love you, too."
  sayHiToGrandma("I love you, Grandma.")
  }


