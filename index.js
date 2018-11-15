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

  if (string === string.toLowerCase()){
    string = "I can't hear you!";
    return string
  }
   if (string === string.toUpperCase()){
    string = "YES INDEED!";
    return string
  }
    if (string === string){
      string = "I love you, too.";
      return string
    }


}
