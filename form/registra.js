function validateForm() {
    var fullName = document.getElementById('fullName').value;
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var dob = document.getElementById('dob').value;
    var gender = document.querySelector('input[name="gender"]:checked');

    if (fullName === "" || username === "" || email === "" || password === "" || confirmPassword === "" ||
        phoneNumber === "" || dob === "" || gender === null) {
        alert("All fields must be filled out");
    } else if (password !== confirmPassword) {
        alert("Passwords do not match");
    } else {
        alert("Registration successful!");
        // You can submit the form or perform additional actions here
    }
}
