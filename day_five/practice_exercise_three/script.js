function handleLogin() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    let message = document.getElementById('message');

    if (username === "" || password === "") {
        message.textContent = "Please fill in all fields";
        message.style.color = "red";
    } else if (username === "admin" && password === "1234") {
        message.textContent = "Admin login successful";
        message.style.color = "green";
    } else {
        message.textContent = "Welcome, " + username + "!";
        message.style.color = "green";
    }
}