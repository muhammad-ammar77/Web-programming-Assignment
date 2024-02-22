function validateSignIn() {
    const username = document.getElementById('signInUsername').value.trim();
    const password = document.getElementById('signInPassword').value.trim();

    if (username === '' || password === '') {
        alert('Username and password cannot be empty.');
        return false;
    }

    return true;
}

function validateSignUp() {
    const username = document.getElementById('signUpUsername').value.trim();
    const password = document.getElementById('signUpPassword').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    const email = document.getElementById('email').value.trim();
    const age = document.getElementById('age').value.trim();
    const fullName = document.getElementById('fullName').value.trim();
    const address = document.getElementById('address').value.trim();
    const phone = document.getElementById('phone').value.trim();

    if (username === '' || password === '' || confirmPassword === '' || email === '' || age === '' || fullName === '' || address === '' || phone === '') {
        alert('All fields are required.');
        return false;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return false;
    }

    if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/.test(password)) {
        alert('Password must contain at least 8 characters including one number and one special character.');
        return false;
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    if (isNaN(age) || age < 18 || age > 100) {
        alert('Age must be a number between 18 and 100.');
        return false;
    }

    return true;
}