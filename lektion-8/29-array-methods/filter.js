/* 
    array methods
    sort
    filter  <===
    find
    map
    reduce
 */

    //  numbers
    const numbers = [1, 32, 5, 29, 15, 6, 100, 483, 130420, 5];
    
    //  put all numbers => 25 in a new array
    // const largeNumbers = [];
    // numbers.forEach(num => {
    // if (num >= 25)  {
    //     largeNumbers.push(num);
    // }
    // })

    //  filter out numbers lower than 25
 /*   const largeNumbers = numbers.filter (num => num >= 25);
    console.log(largeNumbers);

    const names = ["Calo", "Robcar", "Jagswug", "Arilla", "Abelito", "Hjällbo"];
    const longerNames = names.filter(name => name.length >=5)
    console.log(names);
    console.log(longerNames); */

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
            name: "Jagswug",
            points: 50,
        },
    
        {
            name: "Robcar",
            points: 100,
        },
    
        {
            name: "Calo",
            points: 7,
        },
    ];

    const passed = students.filter (student => student.points >= 30)
    console.log(passed);