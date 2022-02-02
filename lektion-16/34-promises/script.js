
const teacherIsNice = false;

const willWeGetTheAnswersToTheExam = () => {
    return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(teacherIsNice)   {
                    //resolve promise
                    const answers = [3, 1, 4, 2];
                    resolve(answers);
                }   else {
                    // reject promise
                    reject("Ingen gillar en lögnare!");
                }
            }, 2000);
        });
    }
willWeGetTheAnswersToTheExam()
    .then((data) => {
         alert("kung!");
         console.log("svaren: ", data);
    })
    .catch((err) =>{
        alert("ljugare");
        console.log(err);
    })


