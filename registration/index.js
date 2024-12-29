document.getElementById("userForm").addEventListener("submit", async function(event) {
    event.preventDefault(); 

    const name = document.getElementById("name").value;
    const mail = document.getElementById("mail").value;
    const cityState = document.getElementById("citystate").value;
    const psw = document.getElementById("psw").value;
    
    const userDto = {
        name: name,
        mail: mail,
        citystate: cityState,
        password: psw
    };

    try {
        const response = await fetch("http://localhost/api/v1/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userDto)
        });

        if (response.ok) {
            alert("User registered successfully!");
        } else {
            const errorData = await response.json();
            alert(`Failed to register user: ${errorData.message || response.statusText}`);
        }
    } catch (error) {
        alert(`An error occurred: ${error.message}`);
    }
});