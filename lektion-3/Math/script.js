let exitGame = false
while(exitGame === false)   {

    let answer = Math.ceil(Math.random() * 10);
    let continueGame = true;
    let tries = 0;

    console.log("right answer: ", answer)

    while (continueGame)    {
        tries++;

        let guess = Number(prompt("Enter your guess:"));

        console.log ("Guessed number: ", guess, typeof guess);

        if (guess === answer)    {
            console.log("Correct answer!")
            alert(`correct answer! You guessed the correct number in ${tries} tries`)
            continueGame = false;
        }

        else if (guess === 0)     {
            console.log("Quitting game")
            alert("Trash")
            continueGame = false;
            exitGame = true;
        }

        else if (guess < answer)    {
            alert("answer too low");
        }

        else if(guess > answer)     {
            alert("asnwer too high");
        }
    }

}


