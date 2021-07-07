var uppercase, lowercase

function shout(string){
  uppercase = string.toUpperCase();
  string = uppercase;
  return uppercase;
}
function whisper(string){
  lowercase = string.toLowerCase();
  string = lowercase;
  return lowercase;
}
function logShout(string){
  uppercase = string.toUpperCase();
  string = uppercase;
  console.log(uppercase);
}
function logWhisper(string){
  lowercase = string.toLowerCase();
  string = lowercase;
  console.log(lowercase);
}
function sayHiToGrandma(string){
  if (string.toLowerCase() === string){
    return 'I can\'t hear you!';
  }
  if (string.toUpperCase() === string){
    return 'YES INDEED!';
  }
  if (string === 'I love you, Grandma.'){
    return 'I love you, too.';
  }
}
describe('shout(string)', function() {
  it('receives one argument and returns it in all caps', function() {
    expect(shout('hello')).toEqual('HELLO')
  })
})

describe('whisper(string)', function() {
  it('receives one argument and returns it in all lowercase', function() {
    expect(whisper('HELLO')).toEqual('hello')
  })
})

describe('logShout(string)', function() {
  it('takes a string argument and logs it in all caps using console.log()', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough()

    logShout('hello')

    expect(spy).toHaveBeenCalledWith('HELLO')

    console.log.restore()
  })
})

describe('logWhisper(string)', function() {
  it('takes a string argument and logs it in all lowercase using console.log()', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough()

    logWhisper('HELLO')

    expect(spy).toHaveBeenCalledWith('hello')

    console.log.restore()
  })
})

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
})
