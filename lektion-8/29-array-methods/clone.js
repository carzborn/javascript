/* 
    array methods
    sort
    filter  
    find    
    map
    reduce
    cloining    <===
 */

    const names = ["Calo", "Robcar", "Jagswug", "Arilla", "Abelito", "Hjällbo"];
    const clone_fail = names;

    // const new_array = [names];
 /*    const new_array = [];
    for (let i = 0; i<names.length; i++)    {
        console.log("name: ", names[i]);
        new_array.push(names[i]);
    } */

 /*    const new_array = []; 
    names.forEach(namn => {
        new_array.push(namn);
    })
 */

    const new_array = [...names];

    // const popcorn = clone_fail.pop()
    // console.log("Name popped:", popcorn);
    // console.log(clone_fail);

    console.log("names: ", names);
    console.log("new_array: ", new_array);

   