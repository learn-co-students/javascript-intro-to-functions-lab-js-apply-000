// returns it in all caps
function shout(word1) {
    var upperCase = word1.toUpperCase();
    return upperCase;
}

//returns it in all lowercase
function whisper(word1) {
    var lowerCase = word1.toLowerCase();
    return lowerCase;
}


//console.log(), all caps
function logShout(word1) {
    var upperCase = word1.toUpperCase();
    console.log(upperCase);
    
}

//cosole.log(), all lower
function logWhisper(word1) {
    var lowerCase = word1.toLowerCase();
    console.log(lowerCase);
}



function sayHiToGrandma(word1) {

    if (word1 === word1.toUpperCase()) {
        var returnValue1 = console.log("YES INDEED!");
        return returnValue1;
    }else if (word1 === word1.toLowerCase()){
        var returnValue2 = console.log("I can't hear you!");
        return returnValue2;
    }else if (word1 === "I love you, Grandma.") {
        var returnValue3 = "I love you, too.";
        return returnValue3;
    } else {

    }


    

}
