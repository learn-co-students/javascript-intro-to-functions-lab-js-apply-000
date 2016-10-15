function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}


function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

/// function sayHiToGrandma(string) {
///  if (sayHiToGrandma.toLowerCase() === sayHiToGrandma.string) {
///    return "I can't hear you!"
///  } else if  (sayHiToGrandma.toUpperCase() === sayHiToGrandma.string) {
///  } else {
///}
///}

///function sayHiToGrandma(string) {
///  if (sayHiToGrandma.toLowerCase() === sayHiToGrandma) {
///    return "I can't hear you!"
///  }
///}

///function sayHiToGrandma(string) {
///  var strcase = sayHiToGrandma(string)
///  if (strcase.toLowerCase() === strcase) {
///    return "I can't hear you!"
///} else if (strcase.toUpperCase() === strcase) {
///    return "YES INDEED!"
///  } else {
///    return "I love you, too."
///}

///function sayHiToGrandma(string) {
///  var strlower = sayHiToGrandma(string)
///  if (strlower.toLowerCase === strlower) {
///    return "I can't hear you!"
///  }
///}

///function sayHiToGrandma(string) {
  ///if the string is found to be in lowercase
///  return "I can't hear you!"
///} but if the string is uppercase {
///  return "YES INDEED!"
///} but if the string is equal to "I love you, Grandma." {
///  return "I love you, too."
///}
///}

function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
    return "I can't hear you!"
  } else if (string.toUpperCase() === string) {
    return "YES INDEED!"
  } else {
    return "I love you, too."
  }
}
