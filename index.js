/* TEST 1
describe('shout(string)', function() {
  it('receives one argument and returns it in all caps', function() {
    expect(shout('hello')).toEqual('HELLO')
  })
})*/

//TEST 1 Output =  string should be uppercase by using the toUpperCase() method
function shout(string) {
  return string.toUpperCase()
}

/* TEST 2
describe('whisper(string)', function() {
  it('receives one argument and returns it in all lowercase', function() {
    expect(whisper('HELLO')).toEqual('hello')
  })
})*/

// TEST 2 Output = string should be lowercase using the toLowerCase() method
function whisper(string) {
  return string.toLowerCase();
}

/* TEST 3
describe('logShout(string)', function() {
  it('calls console.log() its one argument in all caps', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough()

    logShout('hello')

    expect(spy).toHaveBeenCalledWith('HELLO')

    console.log.restore()
  })
})*/

// TEST 3 Output logShout calls shout function - returns uppercase version of string in shout function

function logShout(string) {
  console.log(shout(string));
}

/* TEST 4
/* describe('logWhisper(string)', function() {
  it('calls console.log() its one argument in all lowercase', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough()

    logWhisper('HELLO')

    expect(spy).toHaveBeenCalledWith('hello')

    console.log.restore()
  })
}) */

// TEST 4 Output logWhipser calls whisper function - returns lowercase version of a string in whisper function
function logWhisper(string) {
  console.log(whisper(string));
}

/* TEST 5
describe('sayHiToGrandma(string)', function() {
  it('returns "I can\'t hear you!" if `string` is lowercase', function() {
    expect(sayHiToGrandma('hello')).toEqual("I can't hear you!")
  })

  it('returns "YES INDEED!" if `string` is uppercase', function() {
    expect(sayHiToGrandma('HELLO')).toEqual("YES INDEED!")
  })

  it('returns "I love you, too." if `string` is "I love you, Grandma."`', function() {
    expect(sayHiToGrandma("I love you, Grandma.")).toEqual("I love you, too.")
  })
}) */

/* TEST 5 - String = placeholder.  Defined function sayHiToGrandma using if / else if.
Another option - trying to make sure I understand it.
function sayHiToGrandma(string) {
if (string.toLowerCase() == string){
  return "I can\'t hear you!";
} else if (string.toUpperCase() == string) {
  return "YES INDEED!";
} else if (string == "I love you, Grandma.") {
return "I love you, too."
}
}
*/

function sayHiToGrandma(string) {
  if (whisper(string)==string) {
    return "I can\'t hear you!";
  } else if (shout(string)==string) {
    return "YES INDEED!";
  } else if (string== "I love you, Grandma.") {
    return "I love you, too."
    }
  }
