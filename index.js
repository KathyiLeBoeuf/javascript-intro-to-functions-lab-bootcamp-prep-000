function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}
logShout('hello');

function logWhisper(string) {
  console.log(string.toLowerCase())
}
logShout('HeLLO');
/*
var uppercase = 'HELLO'
  uppercase.toUpperCase === uppercase; //true
var lowercase = 'hello'
  lowercase.toLowerCase === lowercase; //true
  
  var mixedcase = 'HELLO'
  mixedcase.toLowerCase === mixedcase;//false
  mixedcase.toUpperCase === mixedcase; //false
 */ 
  
  
function sayHiToGrandma(string) {
  if (string === lowercase)
  return 'I can\'t hear you';
} 
function sayHiToGrandma(string) {
  if (string === uppercase)
  return 'YES INDEED!';
} 


/*
else if (string === uppercase) {
  return 'YES INDEED!';
} else {
  return 'I love you, too';
}
*/
sayHiToGrandma('I LOVE YOU');
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

   
  */