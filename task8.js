const invalidUrl = "https://invalid.url/endpoint";

fetch(invalidUrl)
.then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
})
.then(data => {
    console.log("Data received:", data);
})
.catch(error => {
    console.error("An error occured while fetching data:", error.message);
});