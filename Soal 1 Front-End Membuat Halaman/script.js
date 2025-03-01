$(document).ready(function () {
    $("form").validate();
});


function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("password_confirmation").value;
    const alertMessage = document.getElementById("alert-message");

    alertMessage.classList.add("d-none");
    alertMessage.classList.remove("alert-danger", "alert-success");

    if (name === "" || email === "" || password === "" || confirmPassword === "") {
        alertMessage.classList.remove("d-none");
        alertMessage.classList.add("alert-danger");
        alertMessage.innerText = "All fields must be filled!";
        return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alertMessage.classList.remove("d-none");
        alertMessage.classList.add("alert-danger");
        alertMessage.innerText = "Invalid email format!";
        return false;
    }


    if (password.length < 8) {
        alertMessage.classList.remove("d-none");
        alertMessage.classList.add("alert-danger");
        alertMessage.innerText = "Password must be at least 8 characters!";
        return false;
    }

    if (password !== confirmPassword) {
        alertMessage.classList.remove("d-none");
        alertMessage.classList.add("alert-danger");
        alertMessage.innerText = "Passwords do not match!";
        return false;
    }

    alertMessage.classList.remove("d-none");
    alertMessage.classList.remove("alert-danger");
    alertMessage.classList.add("alert-success");
    alertMessage.innerText = "Pendaftaran Berhasil";
    return false;
}

