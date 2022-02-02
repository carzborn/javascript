/* 
objects
*/

/* const fluffles =    [
    "Mr Fluffles",      // 0 = name
    3,                      // 1 = age
    "Bengt",            // 2 = owner    
    "Annoy people",      //3 = hobbies   
    "cat",
];

const capitan =    [
    "Captain Cat",      // 0 = name
    9,                      // 1 = age
    "Agda",            // 2 = owner    
    "Hit",      //3 = hobbies   
    "cat",
];


const showPetInfo = (pet) =>    {
console.log(`${pet[0]} is a ${pet[4]} of ${pet[1]} years old. His owner is ${pet[2]} and his favourite hobby is ${pet[3]}`); 
}

showPetInfo(fluffles);
showPetInfo(capitan); */

//Object literal
const fluffles = {
    name: "Mr Fluffles", 
    age: 3,
    owner: "Bengt",
    hobbies: "annoy people",
    speceies: "cat"
}

console.log(fluffles);

const capitan = {
    name: "Captain Cat",
    speceies: "cat",
    age: 9,
    owner: "Agda",
    hobbies: "HIT",
}

const mjauuJr = {
    hobbies: "to be cute",
    speceies: "Kitten",
    age: 1,
    name: "Mjauu Jr"
}

mjauuJr.age = 2;

const showPetInfo = (pet) =>    {
    console.log(`${pet.name} is a ${pet.speceies} of ${pet.age} years old. His owner is ${pet.owner} and his favourite hobby is ${pet.hobbies}`); 
    }
    
    showPetInfo(fluffles);
    showPetInfo(capitan);
    showPetInfo(mjauuJr);

/* console.log(capitan);

//  dot notaion
console.log(fluffles.name);
console.log(capitan.name);

//  square-bracket notation
console.log(fluffles[`hobbies`]); */


