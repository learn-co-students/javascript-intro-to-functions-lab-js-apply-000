/*
describe('shout(string)', function() {
  it('receives one argument and returns it in all caps', function() {
    expect(shout('hello')).toEqual('HELLO')
  })
})
*/


function shout(string) {
  return string.toUpperCase()
}

'hello!'.toUpperCase()


//-----------------------------------------------------

/*
describe('whisper(string)', function() {
  it('receives one argument and returns it in all lowercase', function() {
    expect(whisper('HELLO')).toEqual('hello')
  })
})
*/


function whisper(string) {
  return string.toLowerCase()
  
}

'HELLO!'.toLowerCase();
//-----------------------------------------------------
/*
describe('logShout(string)', function() {
  it('calls console.log(), printing its parameter in all caps', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough()

    logShout('hello')

    expect(spy).toHaveBeenCalledWith('HELLO')

    console.log.restore()
  })
})
*/

function logShout(string){
  console.log(string.toUpperCase())
}

logShout('hello')


  
//-----------------------------------------------------


/*
describe('logWhisper(string)', function() {
  it('calls console.log() its one argument in all lowercase', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough()

    logWhisper('HELLO')

    expect(spy).toHaveBeenCalledWith('hello')

    console.log.restore()
  })
})
*/

function logWhisper(string){
  console.log(string.toLowerCase())
}

logWhisper('HELLO')
//-----------------------------------------------------

/*
describe('sayHiToGrandma(string)',

function() {
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
*/

var ichy = 'I can\'t hear you!';
var yi = 'YES INDEED!';
var ilyg = 'I love you, Grandma.';
var ilyt = 'I love you, too.';

function isUpperCase(string)
{
    return string === string.toUpperCase();
}

function isLowerCase(string)
{
  return string === string.toLowerCase();
}

function sayHiToGrandma(string)
{
  if (isLowerCase(string) === true)
  {
    return ichy
  }
  else if (isUpperCase(string) === true)
  {
    return yi
  }
  else if (string === ilyg)
  {
    return ilyt
  }
}

sayHiToGrandma(string);

