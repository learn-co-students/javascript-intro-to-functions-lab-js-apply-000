function shout(string) {
  return string.toUpperCase() //'returns the shout string of the function and converts the string to all caps'//
}

function whisper(string){
    return string.toLowerCase() //'returns the whisper string of the function but returns it in all lowercase'//
}

function logShout(string){ //'brings about the logShout function which runs the string'//
  string = string.toUpperCase() //'redefines the string as now being all upper case'//
   console.log(string) //'records the console.log function for the new string'//
}

function logWhisper(string){ //'brings up the logWhisper function which will run the string'//
  string = string.toLowerCase() //'makes the string lowercase'//
    console.log(string) //'records the console.log function for the new string'//
}

function sayHiToGrandma(string){
  if(string === 'hello'){
    return "I can\'t hear you!"
  } else if(string === 'HELLO'){
      return "YES INDEED!"
  } else if (string === "I love you, Grandma."){
      return "I love you, too."
  }
}
