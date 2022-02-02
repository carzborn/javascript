

// moi_messi()

// function moi_messi()    {
//     alert("moi messi");
//     console.log("moian");
// }
// moi_messi(); 

// const greetUser = function(name, time)    {
// console.log(`Hola ${name}, its ${time}`);

// }

// greetUser("Moi", "king dags");
// greetUser("Messi", "mada dags");

// const greet = function()    {
//     alert("moi messi");
//     console.log("moian");
// }

// const circleCirc = function(radius)     {
//     return 2 * Math.PI * radius;
// }

// let circum = circleCirc(20);
// console.log(circum);


/*
arrow function
*/


// const circleCirc = radius  => 2 * Math.PI * radius;

// const greet = (myName, time) => {
//     console.log(`Good ${time}, ${myName}`);
// }

// const disturbUser = (txt) => {
//     alert(txt);
// }

// const nagUser = (txt) => {
//     console.log(txt);
// }

// const scream = (txt, action) =>  {
//     let interseting = txt.toUpperCase() + "!!!!!";
//     action(interseting);;
// }  

// scream("blablabla", nagUser);

let students = ["Robban", "Moises", "Calo", "Löggelaktos"];
// for (let i = 0; i < students.length; i++)   {
//     console.log(`Studnet at index ${i} is: ${students[i]}`);
// }



students.forEach(   (student, i) => {
    console.log(`Student at index ${i} is: ${student}`);
}   );
