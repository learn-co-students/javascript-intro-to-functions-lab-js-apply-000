function shout(str){
  return str.toUpperCase();
}

function whisper(str){
  return str.toLowerCase();
}

function logShout(str){
  console.log(str.toUpperCase())
}

function  logWhisper(str){
  console.log(str.toLowerCase());
}

function sayHiToGrandma(str){
  if(str === str.toLowerCase()){
    return "I can\'t hear you!"
  } else if(str === str.toUpperCase()){
    return "YES INDEED!"
  } else if(str === "I love you, Grandma."){
    return "I love you, too."
  }
  }


/*


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
*/