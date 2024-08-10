function divideNumbers(numerator, denominator){
    if (denominator === 0) {
        throw new Error("Cannot divide by Zero");
    }
    return numerator / denominator;
}

try {
    let result = divideNumbers(10, 0);
    console.log("Result:", result );
} catch (error) {
    console.error("An Error Occured:", error.message);
}