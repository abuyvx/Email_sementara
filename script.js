function generateEmail() {
    const randomString = Math.random().toString(36).substring(7);
    document.getElementById("emailAddress").value = randomString + "@temporary.com";
}

function copyEmail() {
    const emailField = document.getElementById("emailAddress");
    emailField.select();
    document.execCommand("copy");
    alert("Email disalin: " + emailField.value);
}
