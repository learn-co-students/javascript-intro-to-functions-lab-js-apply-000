const shout = str => {
  return str.toUpperCase()
}

const logShout = str => {
  console.log(str.toUpperCase())
}

const whisper = str => {
  return str.toLowerCase()
}

const logWhisper = str => {
  console.log(str.toLowerCase())
}

const sayHiToGrandma = str => {
  if (str === 'I love you, Grandma.') {
    return 'I love you, too.'
  }
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      return 'YES INDEED!'
    } else if (str[i] === str[i].toLowerCase()) {
      return 'I can\'t hear you!'
    }
  }
}