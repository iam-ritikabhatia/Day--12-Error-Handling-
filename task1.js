function throwErrorFunction() {
  throw new Error("This is an Intentional");
}
try {
  throwErrorFunction();
} catch (error) {
  console.error("An Error Occured:", error.message);
}
