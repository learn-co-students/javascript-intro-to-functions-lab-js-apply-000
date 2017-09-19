// This shout(string) function receives one argument and returns it in all caps
function shout(string){
  if (typeof string === 'string'){
    return string.toUpperCase()
  } else {
    console.log("Please Enter an argument of type string")
  }
}
//console.log(shout(3))
//console.log(shout('Tango'))

// This whisper(string) function receives one argument and returns it in all lowercase
function whisper(string){
  if (typeof string === 'string'){
    return string.toLowerCase()
  } else {
    console.log("Please Enter an argument of type string")
  }
}

// This logShout(string) function calls console.log() with its one argument in all caps
function logShout(string){
  console.log(shout(string))
}

//This logWhisper(string) function calls console.log() with its one argument in all lowercase
function logWhisper(string){
  console.log(whisper(string))
}

// This sayHiToGrandma(string) function returns conditional based outputs
function sayHiToGrandma(string){
  if (string.toLowerCase() === string){
    return "I can't hear you!"
  }else if (string.toUpperCase() === string) {
    return "YES INDEED!"
  }else if (string === "I love you, Grandma.") {
    return "I love you, too."
  }else {
  }
}

//console.log(sayHiToGrandma('HELLO'))
//console.log(sayHiToGrandma('hello'))
//console.log(sayHiToGrandma('I love you, Grandma.'))
