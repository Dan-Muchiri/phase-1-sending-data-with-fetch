// Add your code here
function submitData(userName, userEmail) {
    const userData = {
      name: userName,
      email: userEmail
    };
  
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(userData)
    };
  
    return fetch("http://localhost:3000/users", configurationObject)
      .then(response => response.json())
      .then(data => {
        document.body.innerHTML += data.id;
      })
      .catch(error => {
        document.body.innerHTML += error.message;
      });
  }
  
  submitData('dan', 'danspmunene@gmail.com');
  