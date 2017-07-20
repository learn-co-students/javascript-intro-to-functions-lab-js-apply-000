var shout = function(string) {
    return string.toUpperCase();
}

var whisper = function(string) {
    return string.toLowerCase();
}

function logShout(string) {
    return console.log(shout(string));
}

function logWhisper(string) {
    return console.log(whisper(string));
}

function sayHiToGrandma(string) {
    var upper = shout(string);
    if (string === "I love you, Grandma." && string !== upper){
        //If Grandma can only hear yelling, how could she respond to a mixed-case/whisper?
        //This is how I would do it if Grandma didn't short circuit :P.
        //return string === shout("I love you, Grandma.") ? "I love you, too." : "YES INDEED!"
        return "I love you, too."
    } else if (string === upper){
        return "YES INDEED!"
    } else {
        return "I can't hear you!"
    }


}
