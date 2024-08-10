function randomPromise() {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.random();
        if (randomNumber > 0.5){
            resolve("Promise resolved succesfully!");
        }
        else {
            reject(new Error("Promise was rejected."));
        }
    });
}

async function handleRandomPromise() {
    try {
       const message = await randomPromise();
       console.log(message); 
    } catch (error) {
        console.error("An error occurred:", error.message);
    }
}

handleRandomPromise();