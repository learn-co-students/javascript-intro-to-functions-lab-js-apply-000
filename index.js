function shout(string) {
  // Using built-in method
  return string.uppercase();

  /* Using a C-like ascii array, as if 'string' was not a type
  let strArray = [];
  let upString = ""

  for (let i = 0; i < string.length; i++) {
    strArray[i] = string[i].charCodeAt() - 32;
    if (strArray[i] >= 65 && strArray[i] <= 90 ) {
      upString += String.fromCharCode(strArray[i]);
    } else {
      return "Invalid input. All letters must be lowercase letters.";
    }
  }
  return upString;
  */
}
