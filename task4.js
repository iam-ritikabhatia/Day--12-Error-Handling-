class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

function checkValue(value){
    if (value < 0){
        throw new CustomError("Value cannot be negative");
    }
    return "Value is valid";
}

try {
    let result = checkValue(-1);
    console.log("Result is:", result);
}
catch (error){
    if (error instanceof CustomError) {
        console.error("A custom error occured:", error.message);
    }
    else {
        console.error("An unknown error occurred:", error.message);
    }
}