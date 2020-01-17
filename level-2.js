// Level 2 
// 1. 

for(counter = 15; counter <= 25; counter++) {
    if(counter % 2 === 0) {
        console.log(counter);
    }   
}

// 2. 
var innerFunction = function iAmAfunction() {
    console.log("I am a function.")
}

function outerFunction(_anArgument) {
    _anArgument();
}

outerFunction(innerFunction);