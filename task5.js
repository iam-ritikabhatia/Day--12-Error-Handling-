class ValidationError extends Error {
    constructor(message){
        super(message);
        this.name = "Validation Error";
    }
}

function validateInput(input) {
    if (input.trim() === ""){
        throw new ValidationError("Input cannot be empty");
    }
return "Input is valid";
}

try {
    let userInput = "";
    let result = validateInput(userInput);
    console.log("Validation result:", result);
}
catch (error){
    if (error instanceof ValidationError) {
console.error("Validation error:", error.message);
    }
    else {
        console.error("An unknown error occurred:", error.message);
    }
}