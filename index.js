// Add your code here
 function submitData(name, email){
    const data = {
        name: name,
        email: email,
    }
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(data),
      })
      .then(function (response) {
        return response.json();
      })
      .then(function (object) {
        // dom shit to append object.id
        const div = document.createElement('div');
        div.innerHTML =`${object.id}`;

        document.body.appendChild(div)
      })
      .catch(function (error) {
        alert("Bad things! Ragnarők!");
        document.body.innerHTML =`<p>${error.message}</p>`;
      });
 }
