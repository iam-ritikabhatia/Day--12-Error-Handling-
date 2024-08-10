function throwErrorFunction(numerator, denominator) {
if ( denominator === 0){
    throw new Error("Cannot divide by zero");
}
return numerator / denominator;
}

try {
    console.log("Try block: Attempting to divide Numbers");
    let result = divideNumbers(10, 0);
    console.log("Try block: Result is", result);
}
catch (error){
    console.error("Catch block: An Error Occured -", error.message);
    } 
    finally {
        console.log("Finally block: Execution Completed");
    }