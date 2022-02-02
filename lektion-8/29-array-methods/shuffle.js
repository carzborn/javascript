/* 
    array methods
    sort
    filter  
    find    
    map
    reduce
    cloining   
    shuffle     <===
 */


    const numbers = [2, 4, 6, 8, 9, 12, 22, 27, 33, 42];
   console.log("Numbers before shuffle: ", numbers);

   //  numbers.sort(() => 0.5 - Math.random());

   // Fisher-Yates algorithm
   // https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj
   const shuffleArray = array => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }

    shuffleArray(numbers);
    console.log("Numbers after shuffle:",  numbers);



    