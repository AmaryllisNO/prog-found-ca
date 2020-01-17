// Level 1
// 1. 
var variable = ("string");

// 2. 
var person = {
    status: "single"
}

// 3. 
var outOfStock = true; 

if(outOfStock === true) {
    console.log("Out of stock");
}
else {
    console.log("In stock");
}

// 4. 
var arrayOfFive = [1, 2, 3, 4, 5]; 

for(index = 0; index < arrayOfFive.length; index++) {
    console.log(arrayOfFive[index]);
}


// 5. 
for(counter = 15; counter <= 25; counter++) {
    console.log(counter);
}


// 6.


for(counter = 15; counter <= 25; counter++) {
    if(counter === 20) {
        console.log(counter);
    }
}


// 7. 

var artists = [
    {
        name: "Netsky",
        age: 30,
        isActive: true
    },
    {
        name: "Twitch",
        age: 28,
        isActive: false
    }
];

for (var i = 0; i < artists.length; i++) {
    console.log(artists[i].age);
    console.log(artists[i].isActive);
}

// 8. 
function whatIdontLike(thingIDontLike) {
    console.log("I don't like " + thingIDontLike);
}

whatIdontLike("spiders");

// 9. 
function functionWithTwoArguments(argument1, argument2){
    console.log(argument2 - argument1);
}

functionWithTwoArguments();

// 10. 
function functionWithOneArgument(theOnlyArgument) {
    var array = [theOnlyArgument];
}

functionWithOneArgument(true);

