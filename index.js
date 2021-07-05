function shout (string) {
  return string.toUpperCase()
}
function whisper (string) {
  return string.toLowerCase()
}

function logShout (string) {
  var aux = string.toUpperCase()
  console.log(aux);
}

function logWhisper (string) {
  var aux = string.toLowerCase()
  console.log(aux);
}

function sayHiToGrandma(string){
  
 const lowercase = "hello"
 if (string == lowercase)
 { var aux = "I can't hear you!" 
    return (aux)  
 }
 
  const uppercase= 'HELLO'
  if (string == uppercase)
    return ("YES INDEED!")

  const stringaux = "I love you, Grandma."
  if (stringaux == string)
    return ("I love you, too.")
}

