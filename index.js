//creating function shout that accepts a string
function shout(string){
  //the it() says "returns argument in all caps"
  return string.toUpperCase()
  
  //test for it's case
  //string.toUpperCase()===uppercase
  //string.toLowerCase()===lowercase
}

function whisper(string){
  return string.toLowerCase()
  //string.toUpperCase()===uppercase
  //string.toLowerCase()===lowercase
}

function logShout(string){
  console.log(string.toUpperCase())
}

function logWhisper(string){
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string){
  if (string.toLowerCase() === string)
  {
    return "I can't hear you!"
  }
  
  if (string.toUpperCase() === string)
  {
    return "YES INDEED!"
  }
  
  if (string === "I love you, Grandma.")
  {
    return "I love you, too."
  }
}
