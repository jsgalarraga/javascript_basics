// Some objects
// The 'key' can either be with quotes or not if its a single word
var myDog = {
    name: 'flanagan',
    'the legs': 5,
    tails: 0,
    friends: ['j', 2]
};

// Object access to properties
var name = myDog.name;
var legs = myDog['the legs'];

var property = 'friends';
var friends = myDog[property];

// Modify properties
myDog.name = 'Antonio'
myDog.bark = 'woof'
delete myDog.tails

// Check if property exists
console.log(myDog.hasOwnProperty('tails'))

// Access complex objects
var myPlants = [
    {
        type: "flowers",
        list: ["rose", "tulip", "dandelion"]
    },
    {
        type: "trees",
        list: ["fir", "pine", "birch"]
    }
];
var secondTree = myPlants[1].list[1]; 