function submitHandler(e) {
    e.preventDefault();  // Prevent the default form submission behavior
    
    const cred = {
      email: document.getElementById("email").value,
      password: document.getElementById("password").value
    };

    const headers = {
        'Content-Type': 'application/json'
      }
  
    const url = 'http://localhost:8002/login/create-user';  // Replace with the correct URL of your server and endpoint
  
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cred)
    })
      .then(response => response.json())  // Parse the response as JSON
      .then(data => {
        // Handle the response data here, e.g., update the UI
        console.log(data);
      })
      .catch(error => {
        // Handle any errors that may occur during the request
        console.error(error);
      });
  }