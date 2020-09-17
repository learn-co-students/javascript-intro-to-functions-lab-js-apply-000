function shout (string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
  if (string === 'I love you, Grandma.') {
    return 'I love you, too.';
  }
  let isLowerCase = testLowerCase(string); //How do I test for lower case?
  let isUpperCase = testUpperCase(string);
  if (isLowerCase) {
    return 'I can\'t hear you!';
  } else if (isUpperCase) {
    return 'YES INDEED!';
  }
}

function testLowerCase (string) {
  let lowerCase = string.toLowerCase();
  if (lowerCase === string) {
    return true;
  } else {
    return false;
  }
}

function testUpperCase(string) {
  let upperCase = string.toUpperCase();
  if (upperCase === string) {
    return true;
  } else {
    return true;
  }
}