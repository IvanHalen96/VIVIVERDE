
// Create an async function to make the API call
async function fetchBackendData() {
  // Define the API endpoint
  const endpoint = "http://localhost:8001/login/test";

  // Make the API call using the fetch() function
  const response = await fetch(endpoint);

  // Check if the response was successful
  if (response.ok) {
    // Return the parsed JSON response body
    return await response.json();
  } else {
    // Throw an error if the response was not successful
    throw new Error("Failed to fetch backend data");
  }
}

// Call the async function and handle the result


// Do something with the backend data

const funcionAwait =  async () => {
  const backendData = await fetchBackendData();
}
funcionAwait();