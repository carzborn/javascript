

fetch('data/dogo.json')
    .then(res => {
        console.log(res);

        if (!res.ok) {
            throw new Error("Response not ok");
        }
        return res.json()
    })
    .then(data =>{
        console.log("Got data!", data);
    })
    .catch(err => {
        console.log("Dogs rejected", err);
        console.log("Error name: ", err.name);
        console.log("Error message: ", err.message);
    })