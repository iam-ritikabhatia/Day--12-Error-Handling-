async function fetchData() {
  const invalidUrl = "https://invalid.url/endpoint";
  try {
    const response = await fetch(invalidUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Data received:", data);
  } catch (error) {
    console.error("An error occured while fetching data:", error.message);
  }
}

fetchData();
