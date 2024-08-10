function randomPromise() {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.random();
        if (randomNumber > 0.5){
            resolve ("Promise resolved successfully");
        }
        else {
            reject(new Error("Promise was rejected"));
        }
    })
}
randomPromise()
.then((message) => {
console.log(message);
})
.catch((error) => {
console.error("An Error occured:", error.message);
})