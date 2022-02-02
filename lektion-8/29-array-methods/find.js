/* 
    array methods
    sort
    filter  
    find    <===
    map
    reduce
 */

    // numbers
    // const numbers = [1,  5, 29, 15, 6, 100, 32, 483, 130420, 5];

 /*    let firstLargeNum;
    for (let i = 0; i < numbers.length; i++)    {
        if(numbers[i]   >=  25) {
            firstLargeNum = numbers[i];
        }
        break;
    }

    console.log(firstLargeNum); */

    // let firstLargeNum = numbers.find(num => num >= 25)
    // console.log("ooga booga tjomme", firstLargeNum);

    const products = [
        {
            sku: "CORR-BWL",
            name: "Corrosive bowl",
            in_stock: 321,
            price: 0.99,
        },
        {
            sku: "CTN-SPCE",
            name: "Cotton spice rack",
            in_stock: 2,
            price: 149.99,
        },
        {
            sku: "GOOD-COOKIES",
            name: "Inside-out Oreo cookies",
            in_stock: 18,
            price: 2.49,
        },
        {
            sku: "BACK-BREAKER",
            name: "The uncomfortable broom",
            in_stock: 1,
            price: 28.65,
        },
    ];

    const nomnomproduct = products.find(product => product.sku === "GOOD-COOKIES");
    if (nomnomproduct)  {
        console.log("hittade kåka");
    }   else    {
        console.log("hittade inte kåka");
    }

   