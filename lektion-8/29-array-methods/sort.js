/* 
    array methods
    sort    <===
    filter  
    find
    map
    reduce
 */

// sort strings
/* const names = ["Calo", "Robcar", "Jagswug", "Arilla", "Abelito", "Hjällbo"];
console.log("Names in chaos", names);

Sort alphabetically
names.sort();
console.log("Names in proper order:", names);

reverse order
names.reverse();
console.log("Names in proper order:", names); */


//  sort numbers
/* const numbers = [1, 32, 5, 29, 15, 6, 100, 483, 130420, 5];
console.log(numbers);

 numbers.sort((a, b) => a-b);
 console.log("Numbers in order:", numbers); */

// sort objects
const students = [
    {
        name: "Moi",
        points: 42,
    },

    {
        name: "Hjällbo",
        points: 2,
    },

    {
        name: "jagswug",
        points: 50,
    },

    {
        name: "Robcar",
        points: 100,
    },

    {
        name: "calo",
        points: 7,
    },
];


students.sort(  (a,b)   =>  {
    // console.log(a, b);
    // return(a.points-b.points);
    const name1 = a.name.toUpperCase
    const name2 = b.name.toUpperCase

    if(name1<name2){
        return -1;
    }

    if(name1>name2)   {
        return 1;
    }
})

console.log(students);



 



